"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.askAI = askAI;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const openai_1 = __importDefault(require("openai"));
const client = new openai_1.default({
    apiKey: process.env.OPENAI_API_KEY,
});
const SYSTEM_PROMPT = `Tu es l'assistant virtuel du Restaurant Sichuan Paris (川里川外), un restaurant authentique de cuisine du Sichuan situé au 17 Rue Le Peletier, 75009 Paris.

RÈGLES IMPORTANTES:
- Réponds UNIQUEMENT en français
- Réponds de manière concise et amicale (2-3 phrases max)
- Utilise UNIQUEMENT les informations fournies dans le contexte
- Si l'information n'est pas dans le contexte, dis poliment que tu ne sais pas et suggère d'appeler le restaurant au +33 1 47 70 64 11
- Ne jamais inventer d'informations (prix, plats, horaires)
- Si le contexte contient "Réponse directe:", utilise cette réponse telle quelle

PERSONNALITÉ:
- Chaleureux et accueillant
- Fier de la cuisine authentique du Sichuan
- Prêt à aider les clients`;
async function askAI(context, question) {
    // Si c'est une réponse directe du FAQ, l'extraire
    if (context.startsWith("Réponse directe:")) {
        const directResponse = context.replace("Réponse directe:", "").trim();
        return directResponse;
    }
    const userPrompt = `Contexte du restaurant:
${context}

Question du client: ${question}

Réponds de manière naturelle et concise.`;
    const response = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: userPrompt }
        ],
        temperature: 0.7,
        max_tokens: 200,
    });
    return response.choices[0].message.content ?? "Je suis désolé, je n'ai pas pu traiter votre demande. N'hésitez pas à nous appeler au +33 1 47 70 64 11.";
}
