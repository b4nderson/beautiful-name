"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeautifulName = void 0;
const firsLetterUpperOfEachWord_1 = require("./utils/firsLetterUpperOfEachWord");
const removeUselessWhiteSpace_1 = require("./utils/removeUselessWhiteSpace");
const exceptions = __importStar(require("./exceptions"));
class BeautifulName {
    constructor(fullName) {
        this.exceptions = exceptions["br"];
        this.originalName = fullName;
        this.fullName = (0, removeUselessWhiteSpace_1.removeUselessWhiteSpace)(fullName);
        this.fullName = (0, firsLetterUpperOfEachWord_1.firsLetterUpperOfEachWord)(this.fullName);
        this.fullName = this.firstLetterLowerOfEachException(this.fullName);
        const separateFullName = this.fullName.split(" ");
        const [firstName, ...secondNameToTheRest] = separateFullName;
        this.firstName = firstName;
        this.beautifulName = this.firstName;
        if (secondNameToTheRest.length) {
            this.lastName = secondNameToTheRest[secondNameToTheRest.length - 1];
            secondNameToTheRest.pop();
            if (secondNameToTheRest.length) {
                secondNameToTheRest.forEach((name) => {
                    this.beautifulName += this.exceptions.includes(name.toUpperCase())
                        ? ` ${name.toLocaleLowerCase()}`
                        : ` ${name[0]}.`;
                });
            }
            this.beautifulName += ` ${this.lastName}`;
        }
    }
    firstLetterLowerOfEachException(fullName) {
        const separateFullName = fullName.split(" ");
        const newSeparateFullName = separateFullName.map((name) => this.exceptions.includes(name.toUpperCase())
            ? name.toLocaleLowerCase()
            : name);
        const newFullName = newSeparateFullName.join(" ");
        return newFullName;
    }
}
exports.BeautifulName = BeautifulName;
