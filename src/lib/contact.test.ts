import { describe, expect, test } from 'vitest';
import { buildBrevoPayload, contactSchema, createRateLimiter, escapeHtml } from './contact';

describe('contactSchema', () => {
  test('accepts a valid submission and trims whitespace', () => {
    // Arrange
    const input = { name: '  Ada Lovelace ', email: 'ada@example.com', message: 'Ten characters here.' };

    // Act
    const result = contactSchema.safeParse(input);

    // Assert
    expect(result.success).toBe(true);
    if (result.success) expect(result.data.name).toBe('Ada Lovelace');
  });

  test('rejects a short name with the user-facing message', () => {
    const result = contactSchema.safeParse({ name: 'A', email: 'ada@example.com', message: 'Ten characters here.' });
    expect(result.success).toBe(false);
    if (!result.success) expect(result.error.issues[0]?.message).toBe('Name must be at least 2 characters');
  });

  test('rejects an invalid email', () => {
    const result = contactSchema.safeParse({ name: 'Ada', email: 'not-an-email', message: 'Ten characters here.' });
    expect(result.success).toBe(false);
  });

  test('rejects a message over 2000 characters', () => {
    const result = contactSchema.safeParse({ name: 'Ada', email: 'ada@example.com', message: 'x'.repeat(2001) });
    expect(result.success).toBe(false);
  });

  test('keeps a filled honeypot so the endpoint can drop the message silently', () => {
    const result = contactSchema.safeParse({ name: 'Ada', email: 'ada@example.com', message: 'Ten characters here.', website: 'http://spam' });
    expect(result.success).toBe(true);
    if (result.success) expect(result.data.website).toBe('http://spam');
  });
});

describe('escapeHtml', () => {
  test('escapes all five HTML-significant characters', () => {
    expect(escapeHtml(`<a href="x">Tom & Jerry's</a>`)).toBe('&lt;a href=&quot;x&quot;&gt;Tom &amp; Jerry&#x27;s&lt;/a&gt;');
  });

  test('leaves plain text untouched', () => {
    expect(escapeHtml('hello world')).toBe('hello world');
  });
});

describe('createRateLimiter', () => {
  test('allows three requests then blocks the fourth inside the window', () => {
    // Arrange
    let clock = 1_000;
    const limiter = createRateLimiter(3, 15 * 60_000, () => clock);

    // Act + Assert
    expect(limiter.isLimited('1.1.1.1')).toBe(false);
    expect(limiter.isLimited('1.1.1.1')).toBe(false);
    expect(limiter.isLimited('1.1.1.1')).toBe(false);
    expect(limiter.isLimited('1.1.1.1')).toBe(true);
    clock += 1_000;
    expect(limiter.isLimited('1.1.1.1')).toBe(true);
  });

  test('resets after the window passes and keys are independent', () => {
    let clock = 0;
    const limiter = createRateLimiter(1, 1_000, () => clock);

    expect(limiter.isLimited('a')).toBe(false);
    expect(limiter.isLimited('a')).toBe(true);
    expect(limiter.isLimited('b')).toBe(false);
    clock = 1_001;
    expect(limiter.isLimited('a')).toBe(false);
  });
});

describe('buildBrevoPayload', () => {
  test('escapes user content in the HTML body and keeps the raw email for replyTo', () => {
    const payload = buildBrevoPayload({ name: '<b>Ada</b>', email: 'ada@example.com', message: 'line one\nline <two>' });

    expect(payload.replyTo).toEqual({ email: 'ada@example.com', name: '<b>Ada</b>' });
    expect(payload.subject).toBe('Portfolio inquiry from <b>Ada</b>');
    expect(payload.htmlContent).toContain('line one<br/>line &lt;two&gt;');
    expect(payload.htmlContent).toContain('&lt;b&gt;Ada&lt;/b&gt;');
    expect(payload.htmlContent).not.toContain('<b>Ada</b>');
    expect(payload.to[0]?.email).toBe('douglas.epr@hotmail.com');
  });
});
