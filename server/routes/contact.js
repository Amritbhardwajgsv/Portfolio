import { Router } from "express";
import rateLimit from "express-rate-limit";
import { saveContact } from "../lib/db.js";
import { sendContactNotification, isEmailConfigured } from "../lib/mailer.js";

const router = Router();

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many messages sent. Please try again later." }
});

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/", contactLimiter, async (req, res) => {
  const { name, email, message } = req.body ?? {};

  if (typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
    return res.status(400).json({ error: "Name must be between 2 and 100 characters." });
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return res.status(400).json({ error: "A valid email is required." });
  }
  if (typeof message !== "string" || message.trim().length < 10 || message.trim().length > 2000) {
    return res.status(400).json({ error: "Message must be between 10 and 2000 characters." });
  }

  const clean = { name: name.trim(), email: email.trim(), message: message.trim() };

  saveContact(clean);

  if (isEmailConfigured()) {
    try {
      await sendContactNotification(clean);
    } catch (err) {
      console.error("Failed to send contact notification email:", err.message);
    }
  }

  res.status(201).json({ ok: true });
});

export default router;
