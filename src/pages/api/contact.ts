import type { APIRoute } from 'astro';
import { BREVO_API_KEY } from 'astro:env/server';
import { buildBrevoPayload, contactSchema, createRateLimiter } from '@/lib/contact';

export const prerender = false;

const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const BREVO_ENDPOINT = 'https://api.brevo.com/v3/smtp/email';

const limiter = createRateLimiter(RATE_LIMIT_MAX, RATE_LIMIT_WINDOW_MS);

function json(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}

function clientIp(request: Request, fallback: string): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const first = forwarded?.split(',')[0]?.trim();
  return first || fallback || 'unknown';
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  if (limiter.isLimited(clientIp(request, clientAddress))) {
    return json({ error: 'Too many requests. Please try again later.' }, 429);
  }

  // The form also posts natively when the page script has not run, so accept
  // form-encoded bodies alongside the JSON the script sends.
  const contentType = request.headers.get('content-type') ?? '';
  let body: unknown;
  try {
    body = contentType.includes('application/json')
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries());
  } catch {
    return json({ error: 'Request body must be JSON or form data.' }, 400);
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return json({ error: parsed.error.issues[0]?.message ?? 'Invalid input' }, 400);
  }

  // A filled honeypot means a bot. Answer as if it worked and send nothing.
  if (parsed.data.website) return json({ ok: true });

  const response = await fetch(BREVO_ENDPOINT, {
    method: 'POST',
    headers: {
      'api-key': BREVO_API_KEY,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(buildBrevoPayload(parsed.data)),
  });

  if (!response.ok) {
    console.error('[contact] Brevo responded with status', response.status);
    return json({ error: 'Failed to send the message. Please try again later.' }, 500);
  }

  return json({ ok: true });
};
