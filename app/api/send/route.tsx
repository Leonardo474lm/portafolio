
"use server";

export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer re_JmY5mXEp_KwhPzSaTyvC9eKnEZDGEdpDf`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Acme <onboarding@resend.dev>', // <-- cambia esto
      to: body.email,
      subject: body.subject,
      html: `<p>${body.message}</p>`,
    }),
  });

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    status: response.status,
    headers: { 'Content-Type': 'application/json' },
  });
}
