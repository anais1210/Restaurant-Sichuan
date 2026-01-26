import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "src/datas");

interface FAQItem {
  question: string;
  variations: string[];
  reponse: string;
}

interface FAQData {
  faq: FAQItem[];
  reponse_par_defaut: string;
  salutations: Record<string, string>;
}

// Mots-clés par fichier pour le routing
const KEYWORDS_MAP: Record<string, string[]> = {
  "horaires.json": ["horaire", "heure", "ouvert", "fermé", "ouverture", "fermeture", "midi", "soir", "dimanche", "mercredi", "lundi", "mardi", "jeudi", "vendredi", "samedi", "quand"],
  "acces_transport.json": ["métro", "metro", "bus", "venir", "transport", "adresse", "où", "situé", "localisation", "ligne", "station", "accès", "trouver"],
  "menu.json": ["menu", "plat", "manger", "carte", "spécialité", "boeuf", "poulet", "porc", "nouille", "tofu", "végétarien", "épicé", "piquant", "prix"],
  "restaurant_info.json": ["restaurant", "chef", "téléphone", "contact", "réserver", "réservation", "appeler", "allergène", "histoire"],
  "faq.json": ["livraison", "groupe", "recommand"]
};

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Enlève les accents
    .replace(/[^a-z0-9\s]/g, " ");
}

function calculateScore(question: string, keywords: string[]): number {
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

function checkFAQMatch(question: string, faqData: FAQData): string | null {
  const normalizedQuestion = normalizeText(question);

  // Vérifier les salutations
  for (const [key, response] of Object.entries(faqData.salutations)) {
    if (normalizedQuestion.includes(normalizeText(key))) {
      return response;
    }
  }

  // Vérifier les FAQ avec variations
  let bestMatch: FAQItem | null = null;
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

export function retrieveRelevantDoc(question: string): string | null {
  try {
    const files = fs.readdirSync(dataDir).filter(f => f.endsWith(".json"));

    // D'abord, vérifier si c'est une FAQ directe
    const faqPath = path.join(dataDir, "faq.json");
    if (fs.existsSync(faqPath)) {
      const faqData: FAQData = JSON.parse(fs.readFileSync(faqPath, "utf-8"));
      const faqMatch = checkFAQMatch(question, faqData);
      if (faqMatch) {
        return `Réponse directe: ${faqMatch}`;
      }
    }

    // Sinon, trouver les fichiers les plus pertinents
    const fileScores: { file: string; score: number }[] = [];

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
      const infoPath = path.join(dataDir, "restaurant_info.json");
      if (fs.existsSync(infoPath)) {
        return fs.readFileSync(infoPath, "utf-8");
      }
      return null;
    }

    // Combiner le contenu des fichiers pertinents
    const contexts: string[] = [];
    for (const { file } of topFiles) {
      const content = fs.readFileSync(path.join(dataDir, file), "utf-8");
      contexts.push(content);
    }

    return contexts.join("\n\n---\n\n");
  } catch (error) {
    console.error("Erreur RAG:", error);
    return null;
  }
}
