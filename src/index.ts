import { liveMarkdownPlugin } from "./realtimeMarkdown"
import { domEventHandlers } from "./domEvents"
import { realtimeMarkdownTheme } from "./theme"
import type { Extension } from "@codemirror/state"

export * from "./realtimeMarkdown"
export * from "./domEvents"
export * from "./theme";

export const realtimeMarkdown: Extension[] = [
    liveMarkdownPlugin,
    domEventHandlers,
    realtimeMarkdownTheme,
];

export const realtimeMarkdownWithoutTheme: Extension[] = [
    liveMarkdownPlugin,
    domEventHandlers,
];