import { liveMarkdownPlugin } from "./realtimeMarkdown";
import { domEventHandlers } from "./domEvents";
import { realtimeMarkdownTheme } from "./theme";
export * from "./realtimeMarkdown";
export * from "./domEvents";
export * from "./theme";
export const realtimeMarkdown = [
    liveMarkdownPlugin,
    domEventHandlers,
    realtimeMarkdownTheme,
];
export const realtimeMarkdownWithoutTheme = [
    liveMarkdownPlugin,
    domEventHandlers,
];
