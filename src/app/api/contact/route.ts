import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const payload = {
    sender: { name: 'Portfolio Contact Form', email: 'a69fdc001@smtp-brevo.com' },
    to: [{ email: 'douglas.epr@hotmail.com', name: 'Douglas Gouveia' }],
    replyTo: { email, name },
    subject: `Portfolio inquiry from ${name}`,
    htmlContent: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <hr/>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `,
  };

  console.log('Sending to Brevo:', JSON.stringify(payload));

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'api-key': process.env.BREVO_API_KEY!,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const responseText = await res.text();
  console.log('Brevo response status:', res.status);
  console.log('Brevo response body:', responseText);

  if (!res.ok) {
    return NextResponse.json(
      { error: 'Failed to send', detail: responseText },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
