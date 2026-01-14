import { Resend } from 'resend';
import type { APIRoute } from 'astro';

const getResend = () => {
  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, org, topic, message } = data;

    // Validate required fields
    if (!name || !email || !topic || !message) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required fields' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Send email via Resend
    const resend = getResend();
    if (!resend) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Email service not configured. Please email us directly at info@spadesinstitute.org' 
        }),
        {
          status: 503,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    await resend.emails.send({
      from: 'Spades Institute <contact@spadesinstitute.org>',
      to: 'info@spadesinstitute.org',
      replyTo: email,
      subject: `[Spades Institute] ${topic}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1e3a5f; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background: #f9fafb; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
            <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${org ? `<p style="margin: 8px 0;"><strong>Organization:</strong> ${org}</p>` : ''}
            <p style="margin: 8px 0;"><strong>Topic:</strong> ${topic}</p>
          </div>
          
          <div style="background: #ffffff; padding: 16px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #111827; margin-top: 0;">Message:</h3>
            <p style="color: #374151; line-height: 1.6; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
            This message was sent from the Spades Institute contact form.
          </p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Failed to send message. Please try again or email us directly.' 
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
