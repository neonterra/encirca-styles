"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const withThemeProvider_1 = __importDefault(require("../../Providers/withThemeProvider"));
const Text_1 = __importDefault(require("./Text"));
exports.default = (0, withThemeProvider_1.default)(Text_1.default);
