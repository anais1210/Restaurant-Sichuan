"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveRelevantDoc = retrieveRelevantDoc;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dataDir = path_1.default.join(process.cwd(), "src/datas");
// Mots-clés par fichier pour le routing
const KEYWORDS_MAP = {
    "horaires.json": ["horaire", "heure", "ouvert", "fermé", "ouverture", "fermeture", "midi", "soir", "dimanche", "mercredi", "lundi", "mardi", "jeudi", "vendredi", "samedi", "quand"],
    "acces_transport.json": ["métro", "metro", "bus", "venir", "transport", "adresse", "où", "situé", "localisation", "ligne", "station", "accès", "trouver"],
    "menu.json": ["menu", "plat", "manger", "carte", "spécialité", "boeuf", "poulet", "porc", "nouille", "tofu", "végétarien", "épicé", "piquant", "prix"],
    "restaurant_info.json": ["restaurant", "chef", "téléphone", "contact", "réserver", "réservation", "appeler", "allergène", "histoire"],
    "faq.json": ["livraison", "groupe", "recommand"]
};
function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Enlève les accents
        .replace(/[^a-z0-9\s]/g, " ");
}
function calculateScore(question, keywords) {
    const normalizedQuestion = normalizeText(question);
    const words = normalizedQuestion.split(/\s+/);
    let score = 0;
    for (const keyword of keywords) {
        const normalizedKeyword = normalizeText(keyword);
        if (normalizedQuestion.includes(normalizedKeyword)) {
            score += 2;
        }
        if (words.includes(normalizedKeyword)) {
            score += 1;
        }
    }
    return score;
}
function checkFAQMatch(question, faqData) {
    const normalizedQuestion = normalizeText(question);
    // Vérifier les salutations
    for (const [key, response] of Object.entries(faqData.salutations)) {
        if (normalizedQuestion.includes(normalizeText(key))) {
            return response;
        }
    }
    // Vérifier les FAQ avec variations
    let bestMatch = null;
    let bestScore = 0;
    for (const item of faqData.faq) {
        let score = 0;
        // Score basé sur la question principale
        const questionWords = normalizeText(item.question).split(/\s+/);
        for (const word of questionWords) {
            if (word.length > 2 && normalizedQuestion.includes(word)) {
                score += 1;
            }
        }
        // Score basé sur les variations
        for (const variation of item.variations) {
            if (normalizedQuestion.includes(normalizeText(variation))) {
                score += 3;
            }
        }
        if (score > bestScore) {
            bestScore = score;
            bestMatch = item;
        }
    }
    if (bestMatch && bestScore >= 2) {
        return bestMatch.reponse;
    }
    return null;
}
function retrieveRelevantDoc(question) {
    try {
        const files = fs_1.default.readdirSync(dataDir).filter(f => f.endsWith(".json"));
        // D'abord, vérifier si c'est une FAQ directe
        const faqPath = path_1.default.join(dataDir, "faq.json");
        if (fs_1.default.existsSync(faqPath)) {
            const faqData = JSON.parse(fs_1.default.readFileSync(faqPath, "utf-8"));
            const faqMatch = checkFAQMatch(question, faqData);
            if (faqMatch) {
                return `Réponse directe: ${faqMatch}`;
            }
        }
        // Sinon, trouver les fichiers les plus pertinents
        const fileScores = [];
        for (const file of files) {
            const keywords = KEYWORDS_MAP[file] || [];
            const score = calculateScore(question, keywords);
            if (score > 0) {
                fileScores.push({ file, score });
            }
        }
        // Trier par score décroissant
        fileScores.sort((a, b) => b.score - a.score);
        // Prendre les 2 meilleurs fichiers max
        const topFiles = fileScores.slice(0, 2);
        if (topFiles.length === 0) {
            // Fallback: retourner les infos de base du restaurant
            const infoPath = path_1.default.join(dataDir, "restaurant_info.json");
            if (fs_1.default.existsSync(infoPath)) {
                return fs_1.default.readFileSync(infoPath, "utf-8");
            }
            return null;
        }
        // Combiner le contenu des fichiers pertinents
        const contexts = [];
        for (const { file } of topFiles) {
            const content = fs_1.default.readFileSync(path_1.default.join(dataDir, file), "utf-8");
            contexts.push(content);
        }
        return contexts.join("\n\n---\n\n");
    }
    catch (error) {
        console.error("Erreur RAG:", error);
        return null;
    }
}
