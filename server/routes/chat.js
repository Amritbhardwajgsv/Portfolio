import { Router } from "express";
import rateLimit from "express-rate-limit";
import { answerQuestion } from "../lib/gemini.js";

const router = Router();

const chatLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many messages. Please slow down." }
});

router.post("/", chatLimiter, async (req, res) => {
  const { message } = req.body ?? {};

  if (typeof message !== "string" || message.trim().length === 0 || message.trim().length > 500) {
    return res.status(400).json({ error: "Message must be between 1 and 500 characters." });
  }

  if (!process.env.GEMINI_API_KEY) {
    return res.status(503).json({ error: "Chat is not configured on the server yet." });
  }

  try {
    const reply = await answerQuestion(message.trim());
    res.json({ reply });
  } catch (err) {
    console.error("Chat request failed:", err.message);
    res.status(502).json({ error: "Couldn't reach the assistant right now. Try again shortly." });
  }
});

export default router;
