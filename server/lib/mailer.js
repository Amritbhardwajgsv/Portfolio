import nodemailer from "nodemailer";

let transporter = null;

function getTransporter() {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) return null;
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }
  return transporter;
}

export async function sendContactNotification({ name, email, message }) {
  const t = getTransporter();
  if (!t) {
    throw new Error("Email is not configured (EMAIL_USER/EMAIL_PASS missing)");
  }

  await t.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `Portfolio contact form: ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`
  });
}

export function isEmailConfigured() {
  return Boolean(process.env.EMAIL_USER && process.env.EMAIL_PASS);
}
