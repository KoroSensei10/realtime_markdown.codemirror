"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.liveMarkdownPlugin = void 0;
exports.realtimeMarkdown = realtimeMarkdown;
var language_1 = require("@codemirror/language");
var view_1 = require("@codemirror/view");
var utils_1 = require("./utils");
var ClickableLink_1 = require("./Widget/ClickableLink");
var domEvents_1 = require("./domEvents");
function realtimeMarkdown(view) {
    var decorations = [];
    for (var _i = 0, _a = view.visibleRanges; _i < _a.length; _i++) {
        var _b = _a[_i], from = _b.from, to = _b.to;
        (0, language_1.syntaxTree)(view.state).iterate({
            from: from,
            to: to,
            enter: function (node) {
                var _a;
                var isModKeyPressed = view.state.field(domEvents_1.modKeyPressedField, false);
                var isInSelection = (0, utils_1.selectionInNode)(view, node.from, node.to);
                switch (node.name) {
                    case "ListMark": {
                        if (!isInSelection) {
                            decorations.push(view_1.Decoration.mark({ class: 'rtm-listMark' })
                                .range(node.from, node.to));
                        }
                        else {
                            decorations.push(view_1.Decoration.mark({ class: "rtm-listMarkSelected" })
                                .range(node.from, node.to));
                        }
                        break;
                    }
                    case "ListItem": {
                        decorations.push(view_1.Decoration.mark({ class: "rtm-listItem" }).range(node.from, node.to));
                        break;
                    }
                    case "QuoteMark": {
                        if (!isInSelection) {
                            decorations.push(view_1.Decoration.mark({ class: 'rtm-quoteMark' }).range(node.from, node.to));
                        }
                        else {
                            decorations.push(view_1.Decoration.mark({ class: "rtm-quoteMarkSelected" }).range(node.from, node.to));
                        }
                        break;
                    }
                    case "Blockquote": {
                        break;
                    }
                    case "CodeMark": {
                        break;
                    }
                    case "Paragraph": {
                        break;
                    }
                    case "HorizontalRule": {
                        break;
                    }
                    case "StrongEmphasis":
                        if (!isInSelection) {
                            decorations.push(view_1.Decoration.replace({}).range(node.from, node.from + 2), view_1.Decoration.replace({}).range(node.to - 2, node.to));
                        }
                        decorations.push(view_1.Decoration.mark({ class: "rtm-strongEmphasis" }).range(node.from + 2, node.to - 2));
                        break;
                    case "Emphasis":
                        if (!isInSelection) {
                            decorations.push(view_1.Decoration.replace({}).range(node.from, node.from + 1), view_1.Decoration.replace({}).range(node.to - 1, node.to));
                        }
                        decorations.push(view_1.Decoration.mark({ class: "rtm-emphasis" }).range(node.from + 1, node.to - 1));
                        break;
                    case "Link":
                    case "LinkMark": {
                        var text = view.state.sliceDoc(node.from, node.to);
                        var match = text.match(/\[(.*?)\]\((.*?)\)/);
                        if (match) {
                            var linkText = match[1];
                            var url = match[2];
                            if (!isInSelection && url) {
                                // Hide the brackets and parentheses
                                decorations.push(view_1.Decoration.replace({
                                    widget: new ClickableLink_1.ClickableLinkWidget(url, linkText),
                                }).range(node.from, node.to));
                            }
                            else {
                                // Style le texte du lien
                                decorations.push(view_1.Decoration.mark({ class: "rtm-link" }).range(node.from, node.to));
                            }
                        }
                        break;
                    }
                    case "URL": {
                        if (isInSelection) {
                            if (isModKeyPressed) {
                                decorations.push(view_1.Decoration.replace({
                                    widget: new ClickableLink_1.ClickableLinkWidget(view.state.sliceDoc(node.from, node.to)),
                                }).range(node.from, node.to));
                            }
                            else {
                                decorations.push(view_1.Decoration.mark({ class: "rtm-url" }).range(node.from, node.to));
                            }
                        }
                        else {
                            if (!isModKeyPressed) {
                                decorations.push(view_1.Decoration.replace({
                                    widget: new ClickableLink_1.ClickableLinkWidget(view.state.sliceDoc(node.from, node.to)),
                                }).range(node.from, node.to));
                            }
                            else {
                                decorations.push(view_1.Decoration.mark({ class: "rtm-url" }).range(node.from, node.to));
                            }
                        }
                        break;
                    }
                    case "ATXHeading1":
                    case "SetextHeading1":
                    case "ATXHeading2":
                    case "SetextHeading2":
                    case "ATXHeading3":
                    case "ATXHeading4":
                    case "ATXHeading5":
                    case "ATXHeading6": {
                        var headingLevel = node.name.includes("1") ? 1 :
                            node.name.includes("2") ? 2 :
                                node.name.includes("3") ? 3 :
                                    node.name.includes("4") ? 4 :
                                        node.name.includes("5") ? 5 : 6;
                        var prefixLength = node.name.startsWith("ATX") ? headingLevel + 1 : 2;
                        var text = (_a = view.state.sliceDoc(node.from, node.to).split(' ')) === null || _a === void 0 ? void 0 : _a[1]; // Texte après les # ou =
                        if (!isInSelection && text) {
                            decorations.push(view_1.Decoration.replace({}).range(node.from, node.from + prefixLength));
                        }
                        else {
                            decorations.push(view_1.Decoration.mark({ class: "rtm-headerMark" }).range(node.from, node.from + prefixLength));
                        }
                        decorations.push(view_1.Decoration.mark({
                            class: "rtm-heading_".concat(headingLevel)
                        }).range(node.from, node.to));
                        break;
                    }
                    case "HeaderMark": {
                        break;
                    }
                    default:
                        break;
                }
            },
        });
    }
    return view_1.Decoration.set(decorations.sort(function (a, b) {
        if (a.from === b.from) {
            return a.value.startSide - b.value.startSide;
        }
        return a.from - b.from;
    }));
}
exports.liveMarkdownPlugin = view_1.ViewPlugin.fromClass(/** @class */ (function () {
    function class_1(view) {
        this.decorations = realtimeMarkdown(view);
    }
    class_1.prototype.update = function (update) {
        if (update.docChanged ||
            update.selectionSet ||
            update.focusChanged
            || update.transactions.some(function (tr) { return tr.effects.some(function (e) { return e.is(domEvents_1.modKeyPressed); }); }))
            this.decorations = realtimeMarkdown(update.view);
    };
    return class_1;
}()), {
    decorations: function (v) { return v.decorations; },
});
