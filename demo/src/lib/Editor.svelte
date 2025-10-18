<script lang="ts">
    import { markdown } from "@codemirror/lang-markdown";
    import { lineNumbers } from "@codemirror/view";
    import { EditorView } from "codemirror";

    import { realtimeMarkdown } from "realtime_markdown.codemirror";

    const basicTheme = EditorView.theme({
        "&": {
            height: "100%"
        },
        ".cm-content": {
            fontFamily: "ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace",
            fontSize: "16px",
            lineHeight: "1.5",
            caretColor: "white",
        },
        ".cm-gutters": {
            backgroundColor: "transparent",
            color: "#6b7280", // Tailwind's neutral-500
            border: "none",
        },
        ".cm-gutterElement": {
            display: "flex",
            alignItems: "center",
        },
    });

    function mountCodeMirror(node: HTMLElement) {
        new EditorView({
            parent: node,
            doc: '## Welcome to the Real-time Markdown Editor!\n\nStart typing your *Markdown* content here.',
            extensions: [
                basicTheme,
                lineNumbers(),
                markdown(),
                realtimeMarkdown,
            ]
        })
    }
</script>

<div {@attach mountCodeMirror}
    class="w-full h-full bg-neutral-800 p-2 rounded-2xl shadow-lg overflow-auto"
>

</div>