import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { retrieveRelevantDoc } from "./services/ragService";
import { askAI } from "./services/openaiService";
import { getFromCache, saveToCache } from "../cache/memoryCache";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3002;

app.post("/ask", async (req: Request, res: Response) => {
  const { question } = req.body as { question?: string };

  // RULES
  if (!question || question.trim().length < 3) {
    return res.status(400).json({ error: "Question invalide" });
  }

  // CACHE
  const cached = getFromCache(question);
  if (cached) {
    return res.json({ answer: cached, cached: true });
  }

  // RAG
  const context = retrieveRelevantDoc(question);
  if (!context) {
    return res.json({ answer: "Je ne sais pas" });
  }

  // IA
  const answer = await askAI(context, question);

  // SAVE CACHE
  saveToCache(question, answer);

  res.json({ answer });
});

app.listen(PORT, () => {
  console.log(`AI Restaurant Assistant running on port ${PORT}`);
});
