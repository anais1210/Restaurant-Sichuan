"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFromCache = getFromCache;
exports.saveToCache = saveToCache;
const cache = new Map();
function getFromCache(question) {
    return cache.get(question);
}
function saveToCache(question, answer) {
    cache.set(question, answer);
}
