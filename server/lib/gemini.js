import { GoogleGenerativeAI } from "@google/generative-ai";
import { profile, education, experience, stack, projects, achievements } from "../data/portfolio.js";

const EMBEDDING_MODEL = "text-embedding-004";
const CHAT_MODEL = "gemini-2.0-flash";

const SYSTEM_INSTRUCTION = `You are the portfolio assistant for Amrit Bhardwaj, embedded on his personal website.
Answer questions about Amrit's education, experience, projects, skills, and achievements using ONLY the CONTEXT provided below.
If the question is unrelated to Amrit's professional/academic background, politely say you can only answer questions about Amrit and redirect the visitor to ask something relevant.
Keep answers concise (2-4 sentences) and speak about Amrit in the third person. Do not invent facts that aren't in the context.`;

let client = null;
let corpus = null; // [{ text, embedding: number[] }]

function getClient() {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not configured");
  }
  if (!client) {
    client = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  }
  return client;
}

function buildChunks() {
  const chunks = [];

  chunks.push(`About Amrit Bhardwaj: ${profile.bio.join(" ")}`);

  for (const edu of education) {
    chunks.push(
      `Education: ${edu.degree} at ${edu.school}, ${edu.location}. CGPA ${edu.cgpa}, graduating ${edu.graduation}. Coursework: ${edu.coursework.join(", ")}.`
    );
  }

  for (const exp of experience) {
    chunks.push(
      `Experience - ${exp.title} at ${exp.company} (${exp.date}, ${exp.location}): ${exp.points.join(" ")}`
    );
  }

  for (const group of stack) {
    chunks.push(`Skills - ${group.title}: ${group.items.join(", ")}.`);
  }

  for (const proj of projects) {
    chunks.push(
      `Project - ${proj.title} (${proj.tech.join(", ")}): ${proj.points.join(" ")}`
    );
  }

  for (const ach of achievements) {
    chunks.push(`Achievement - ${ach.title}: ${ach.points.join(" ")}`);
  }

  return chunks;
}

function cosineSimilarity(a, b) {
  let dot = 0, normA = 0, normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

export async function initCorpus() {
  if (corpus) return corpus;

  const genAI = getClient();
  const embedder = genAI.getGenerativeModel({ model: EMBEDDING_MODEL });
  const chunks = buildChunks();

  corpus = await Promise.all(
    chunks.map(async (text) => {
      const result = await embedder.embedContent(text);
      return { text, embedding: result.embedding.values };
    })
  );

  return corpus;
}

async function retrieveContext(question, topK = 5) {
  const genAI = getClient();
  const embedder = genAI.getGenerativeModel({ model: EMBEDDING_MODEL });
  const { embedding } = await embedder.embedContent(question);

  const scored = corpus
    .map((chunk) => ({ ...chunk, score: cosineSimilarity(embedding.values, chunk.embedding) }))
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, topK).map((c) => c.text);
}

export async function answerQuestion(message) {
  if (!corpus) await initCorpus();

  const genAI = getClient();
  const contextChunks = await retrieveContext(message);

  const model = genAI.getGenerativeModel({
    model: CHAT_MODEL,
    systemInstruction: SYSTEM_INSTRUCTION
  });

  const prompt = `CONTEXT:\n${contextChunks.map((c) => `- ${c}`).join("\n")}\n\nVISITOR QUESTION: ${message}`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}
