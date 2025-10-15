import { WidgetType } from "@codemirror/view";
export class ClickableLinkWidget extends WidgetType {
    constructor(link, content) {
        super();
        this.link = link;
        this.content = content || link;
    }
    eq(other) {
        return other.link === this.link && other.content === this.content;
    }
    toDOM() {
        const a = document.createElement("a");
        a.href = this.link;
        a.textContent = this.content;
        a.target = "_blank";
        a.className = "rtm-link";
        return a;
    }
    ignoreEvent() {
        return true;
    }
}
