import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(value: string): string {
  return value.replaceAll('<', '').replaceAll('>', '').trim();
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = sanitize(body.name ?? '');
    const email = sanitize(body.email ?? '');
    const message = sanitize(body.message ?? '');

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT ?? 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL;
    const senderEmail = process.env.CONTACT_SENDER_EMAIL ?? smtpUser;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !receiverEmail || !senderEmail) {
      return NextResponse.json(
        { error: 'Email service is not configured on the server.' },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const formattedMessage = message.replaceAll('\n', '<br/>');

    await transporter.sendMail({
      from: `Portfolio Contact <${senderEmail}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `New portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="margin:0;padding:24px;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="padding:24px 24px 16px 24px;background:linear-gradient(90deg,#2563eb,#7c3aed);color:#ffffff;">
                <p style="margin:0;font-size:12px;letter-spacing:1px;text-transform:uppercase;opacity:0.9;">Portfolio Contact</p>
                <h2 style="margin:8px 0 0 0;font-size:24px;line-height:1.3;">New message from your website</h2>
              </td>
            </tr>
            <tr>
              <td style="padding:24px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;width:120px;font-size:13px;color:#475569;"><strong>Name</strong></td>
                    <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:15px;color:#0f172a;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;width:120px;font-size:13px;color:#475569;"><strong>Email</strong></td>
                    <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:15px;color:#0f172a;">${email}</td>
                  </tr>
                </table>

                <div style="margin-top:20px;">
                  <p style="margin:0 0 8px 0;font-size:13px;color:#475569;"><strong>Message</strong></p>
                  <div style="padding:14px 16px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;font-size:15px;line-height:1.6;color:#0f172a;">
                    ${formattedMessage}
                  </div>
                </div>

                <p style="margin:20px 0 0 0;font-size:12px;color:#64748b;">Tip: You can reply directly to this email to respond to ${name}.</p>
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
