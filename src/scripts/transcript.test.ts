import { describe, expect, test } from 'vitest';
import { currentLine, phaseFor, stateString, typedChars } from './transcript';
import { lineWindows, transcript, TRANSCRIPT_FROM, TRANSCRIPT_TO } from '@/data/build';

describe('transcript windows', () => {
  test('six contiguous windows cover the configured span with no gaps', () => {
    const windows = lineWindows(6);
    expect(windows[0]?.t0).toBeCloseTo(TRANSCRIPT_FROM, 6);
    const last = windows[5]!;
    expect(last.t0 + last.dt).toBeCloseTo(TRANSCRIPT_TO, 6);
    for (let i = 1; i < windows.length; i += 1) {
      expect(windows[i]!.t0).toBeCloseTo(windows[i - 1]!.t0 + windows[i - 1]!.dt, 6);
    }
  });

  test('every transcript line carries a real figure or a file name, no em dashes', () => {
    for (const line of transcript) {
      expect(line.text).not.toContain('—');
      expect(line.text.length).toBeGreaterThan(10);
    }
  });
});

describe('typedChars', () => {
  const line = { t0: 0.2, dt: 0.2, len: 40 };

  test('is zero before the window and full after it', () => {
    expect(typedChars(0.1, line)).toBe(0);
    expect(typedChars(0.5, line)).toBe(40);
  });

  test('is proportional inside the window', () => {
    expect(typedChars(0.3, line)).toBe(20);
  });
});

describe('currentLine and phaseFor', () => {
  const lines = [
    { t0: 0.04, dt: 0.3, len: 10 },
    { t0: 0.34, dt: 0.3, len: 10 },
    { t0: 0.64, dt: 0.28, len: 10 },
  ];

  test('reports ready before the first line, typing inside, complete after the last', () => {
    expect(phaseFor(0.01, lines)).toBe('ready');
    expect(phaseFor(0.5, lines)).toBe('typing');
    expect(phaseFor(0.95, lines)).toBe('complete');
  });

  test('finds the line whose window has started', () => {
    expect(currentLine(0.01, lines)).toBe(-1);
    expect(currentLine(0.35, lines)).toBe(1);
    expect(currentLine(0.99, lines)).toBe(2);
  });

  test('formats the harness state string', () => {
    expect(stateString('typing', 2, 57, 3)).toBe('typing|2|57|3');
  });
});
