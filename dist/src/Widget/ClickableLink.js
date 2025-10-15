"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickableLinkWidget = void 0;
var view_1 = require("@codemirror/view");
var ClickableLinkWidget = /** @class */ (function (_super) {
    __extends(ClickableLinkWidget, _super);
    function ClickableLinkWidget(link, content) {
        var _this = _super.call(this) || this;
        _this.link = link;
        _this.content = content || link;
        return _this;
    }
    ClickableLinkWidget.prototype.eq = function (other) {
        return other.link === this.link && other.content === this.content;
    };
    ClickableLinkWidget.prototype.toDOM = function () {
        var a = document.createElement("a");
        a.href = this.link;
        a.textContent = this.content;
        a.target = "_blank";
        a.className = "rtm-link";
        return a;
    };
    ClickableLinkWidget.prototype.ignoreEvent = function () {
        return true;
    };
    return ClickableLinkWidget;
}(view_1.WidgetType));
exports.ClickableLinkWidget = ClickableLinkWidget;
