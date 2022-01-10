"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUselessWhiteSpace = void 0;
const removeUselessWhiteSpace = (text) => {
    return text.replace(/\s+/g, " ").trim();
};
exports.removeUselessWhiteSpace = removeUselessWhiteSpace;
