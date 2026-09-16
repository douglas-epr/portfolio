type FormState = 'idle' | 'sending' | 'sent' | 'error';

interface ContactResponse {
  ok?: boolean;
  error?: string;
}

const FALLBACK_ERROR = 'Something went wrong. Email me directly and I will answer.';

async function readError(response: Response): Promise<string> {
  try {
    const data = (await response.json()) as ContactResponse;
    return data.error ?? FALLBACK_ERROR;
  } catch {
    return FALLBACK_ERROR;
  }
}

export function initContactForm(): void {
  const root = document.querySelector<HTMLElement>('[data-contact]');
  const form = root?.querySelector<HTMLFormElement>('form');
  if (!root || !form) return;

  const errorOut = root.querySelector<HTMLElement>('[data-contact-error]');
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const reset = root.querySelector<HTMLButtonElement>('[data-contact-reset]');

  const setState = (state: FormState, message = ''): void => {
    root.dataset.state = state;
    if (submit) submit.disabled = state === 'sending';
    if (errorOut) errorOut.textContent = message;
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    setState('sending');

    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        setState('error', await readError(response));
        return;
      }
      form.reset();
      setState('sent');
    } catch {
      setState('error', FALLBACK_ERROR);
    }
  });

  reset?.addEventListener('click', () => {
    setState('idle');
    form.querySelector<HTMLElement>('input, textarea')?.focus();
  });
}
