import realtimeMarkdownEvents from "./src/domEvents";
import { realtimeMarkdownExtension } from "./src/realtimeMarkdown"
import { realtimeMarkdownTheme } from "./src/theme"

export * from "./src/realtimeMarkdown"
export * from "./src/domEvents"
export * from "./src/theme";

export const realtimeMarkdown = () => {
    return [
        realtimeMarkdownExtension(),
        realtimeMarkdownEvents(),
        realtimeMarkdownTheme,
    ]
}

export const realtimeMarkdownWithoutTheme = () => {
    return [
        realtimeMarkdownExtension(),
        realtimeMarkdownEvents(),
    ]
}