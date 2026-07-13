import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import dataRoutes from "./routes/data.js";
import contactRoutes from "./routes/contact.js";
import chatRoutes from "./routes/chat.js";
import { initCorpus } from "./lib/gemini.js";

const app = express();
const PORT = process.env.PORT || 4000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:1234";

app.use(helmet());
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json({ limit: "10kb" }));

app.get("/api/health", (req, res) => res.json({ ok: true }));
app.use("/api", dataRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/chat", chatRoutes);

app.listen(PORT, () => {
  console.log(`Portfolio API listening on :${PORT}`);

  if (process.env.GEMINI_API_KEY) {
    initCorpus()
      .then(() => console.log("Chat corpus embedded and ready"))
      .catch((err) => console.error("Failed to build chat corpus:", err.message));
  } else {
    console.warn("GEMINI_API_KEY not set - /api/chat will return 503 until it's configured");
  }
});
