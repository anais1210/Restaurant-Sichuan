"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const ragService_1 = require("./services/ragService");
const openaiService_1 = require("./services/openaiService");
const memoryCache_1 = require("../cache/memoryCache");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const PORT = process.env.PORT || 3002;
app.post("/ask", async (req, res) => {
    const { question } = req.body;
    // RULES
    if (!question || question.trim().length < 3) {
        return res.status(400).json({ error: "Question invalide" });
    }
    // CACHE
    const cached = (0, memoryCache_1.getFromCache)(question);
    if (cached) {
        return res.json({ answer: cached, cached: true });
    }
    // RAG
    const context = (0, ragService_1.retrieveRelevantDoc)(question);
    if (!context) {
        return res.json({ answer: "Je ne sais pas" });
    }
    // IA
    const answer = await (0, openaiService_1.askAI)(context, question);
    // SAVE CACHE
    (0, memoryCache_1.saveToCache)(question, answer);
    res.json({ answer });
});
app.listen(PORT, () => {
    console.log(`AI Restaurant Assistant running on port ${PORT}`);
});
