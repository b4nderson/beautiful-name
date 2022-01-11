"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firsLetterUpperOfEachWord = void 0;
const firsLetterUpperOfEachWord = (text) => {
    const separateText = text.split(" ");
    const newSeparateText = separateText.map((string) => {
        const firstLetter = string.charAt(0).toUpperCase();
        const secondLetterToLast = string.substring(1).toLowerCase();
        return firstLetter + secondLetterToLast;
    });
    const newText = newSeparateText.join(" ");
    return newText;
};
exports.firsLetterUpperOfEachWord = firsLetterUpperOfEachWord;
