import { liveMarkdownPlugin } from "./src/realtimeMarkdown"
import { domEventHandlers } from "./src/domEvents"
import { realtimeMarkdownTheme } from "./src/theme"
import type { Extension } from "@codemirror/state"

export * from "./src/realtimeMarkdown"
export * from "./src/domEvents"
export * from "./src/theme";

export const realtimeMarkdown: Extension[] = [
    liveMarkdownPlugin,
    domEventHandlers,
    realtimeMarkdownTheme,
];

export const realtimeMarkdownWithoutTheme: Extension[] = [
    liveMarkdownPlugin,
    domEventHandlers,
];