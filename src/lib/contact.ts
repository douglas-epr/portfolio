import { z } from 'zod';

export const CONTACT_LIMITS = {
  nameMin: 2,
  nameMax: 100,
  messageMin: 10,
  messageMax: 2000,
} as const;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(CONTACT_LIMITS.nameMin, 'Name must be at least 2 characters')
    .max(CONTACT_LIMITS.nameMax, 'Name must be 100 characters or fewer'),
  email: z.email('Invalid email address'),
  message: z
    .string()
    .trim()
    .min(CONTACT_LIMITS.messageMin, 'Message must be at least 10 characters')
    .max(CONTACT_LIMITS.messageMax, 'Message must be 2000 characters or fewer'),
  /** Honeypot. Real visitors never see the field. A filled value marks a bot
   *  and the endpoint answers as if it worked without sending anything. */
  website: z.string().max(200).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

const HTML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
};

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => HTML_ESCAPES[char] ?? char);
}

export interface RateLimiter {
  isLimited(key: string): boolean;
}

interface RateWindow {
  count: number;
  resetAt: number;
}

/**
 * Fixed-window limiter kept in module memory. On Vercel this is per function
 * instance, so it is a best-effort brake, not a guarantee. A durable limit
 * belongs in a Vercel Firewall rate-limit rule on POST /api/contact.
 */
export function createRateLimiter(max: number, windowMs: number, now: () => number = Date.now): RateLimiter {
  const windows = new Map<string, RateWindow>();

  return {
    isLimited(key: string): boolean {
      const current = now();
      const existing = windows.get(key);
      if (!existing || current > existing.resetAt) {
        windows.set(key, { count: 1, resetAt: current + windowMs });
        return false;
      }
      if (existing.count >= max) return true;
      windows.set(key, { ...existing, count: existing.count + 1 });
      return false;
    },
  };
}

export interface BrevoPayload {
  sender: { name: string; email: string };
  to: Array<{ email: string; name: string }>;
  replyTo: { email: string; name: string };
  subject: string;
  htmlContent: string;
}

export const CONTACT_RECIPIENT = { email: 'douglas.epr@hotmail.com', name: 'Douglas Gouveia' } as const;
export const CONTACT_SENDER = { name: 'Portfolio Contact Form', email: 'a69fdc001@smtp-brevo.com' } as const;

export function buildBrevoPayload(input: Pick<ContactInput, 'name' | 'email' | 'message'>): BrevoPayload {
  const safeName = escapeHtml(input.name);
  const safeEmail = escapeHtml(input.email);
  const safeMessage = escapeHtml(input.message).replace(/\n/g, '<br/>');

  return {
    sender: { ...CONTACT_SENDER },
    to: [{ ...CONTACT_RECIPIENT }],
    replyTo: { email: input.email, name: input.name },
    // The subject is plain text, so it takes the raw name; only the HTML body is escaped.
    subject: `Portfolio inquiry from ${input.name}`,
    htmlContent: [
      '<h2>New contact form submission</h2>',
      `<p><strong>Name:</strong> ${safeName}</p>`,
      `<p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>`,
      '<hr/>',
      '<p><strong>Message:</strong></p>',
      `<p>${safeMessage}</p>`,
    ].join('\n'),
  };
}
