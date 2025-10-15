"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.realtimeMarkdownWithoutTheme = exports.realtimeMarkdown = void 0;
var realtimeMarkdown_1 = require("./src/realtimeMarkdown");
var domEvents_1 = require("./src/domEvents");
var theme_1 = require("./src/theme");
__exportStar(require("./src/realtimeMarkdown"), exports);
__exportStar(require("./src/domEvents"), exports);
__exportStar(require("./src/theme"), exports);
exports.realtimeMarkdown = [
    realtimeMarkdown_1.liveMarkdownPlugin,
    domEvents_1.domEventHandlers,
    theme_1.realtimeMarkdownTheme,
];
exports.realtimeMarkdownWithoutTheme = [
    realtimeMarkdown_1.liveMarkdownPlugin,
    domEvents_1.domEventHandlers,
];
