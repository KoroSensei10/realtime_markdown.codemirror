import { EditorView, ViewPlugin, ViewUpdate, type DecorationSet } from "@codemirror/view";
export declare function realtimeMarkdown(view: EditorView): DecorationSet;
export declare const liveMarkdownPlugin: ViewPlugin<{
    decorations: DecorationSet;
    update(update: ViewUpdate): void;
}, undefined>;
