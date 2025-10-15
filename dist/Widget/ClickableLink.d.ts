import { WidgetType } from "@codemirror/view";
export declare class ClickableLinkWidget extends WidgetType {
    link: string;
    content: string;
    constructor(link: string, content?: string);
    eq(other: ClickableLinkWidget): boolean;
    toDOM(): HTMLAnchorElement;
    ignoreEvent(): boolean;
}
