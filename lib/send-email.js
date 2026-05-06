/* global process */
import { Resend } from "resend";

export class EmailRequestError extends Error {
  constructor(message, status = 500) {
    super(message);
    this.name = "EmailRequestError";
    this.status = status;
  }
}

export async function sendPortfolioEmail(payload = {}) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = "aungkaungmyat912002@gmail.com";
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ||
    "Portfolio Contact <onboarding@resend.dev>";

  const { name, email, subject, message } = payload;

  if (!name || !email || !message) {
    throw new EmailRequestError("Name, email, and message are required.", 400);
  }

  if (!resendApiKey) {
    throw new EmailRequestError("RESEND_API_KEY is not configured.", 500);
  }

  if (!toEmail) {
    throw new EmailRequestError("CONTACT_TO_EMAIL is not configured.", 500);
  }

  const resend = new Resend(resendApiKey);
  const emailSubject = subject?.trim()
    ? `${subject.trim()} - from ${name}`
    : `Portfolio message from ${name}`;
  const cleanSubject = subject?.trim() || "Not provided";

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    subject: emailSubject,
    html: `
      <h2>New Portfolio Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${cleanSubject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${cleanSubject}\n\nMessage:\n${message}`,
  });

  if (error) {
    return console.error({ error });
  }

  return {
    success: true,
    message: "Message sent successfully.",
  };
}

