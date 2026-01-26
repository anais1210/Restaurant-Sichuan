const cache = new Map<string, string>();

export function getFromCache(question: string): string | undefined {
  return cache.get(question);
}

export function saveToCache(question: string, answer: string): void {
  cache.set(question, answer);
}
