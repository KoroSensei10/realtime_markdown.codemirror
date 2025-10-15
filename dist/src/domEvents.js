"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domEventHandlers = exports.modKeyPressedField = exports.modKeyPressed = void 0;
var state_1 = require("@codemirror/state");
var view_1 = require("@codemirror/view");
exports.modKeyPressed = state_1.StateEffect.define();
exports.modKeyPressedField = state_1.StateField.define({
    create: function () { return false; },
    update: function (value, tr) {
        for (var _i = 0, _a = tr.effects; _i < _a.length; _i++) {
            var effect = _a[_i];
            if (effect.is(exports.modKeyPressed)) {
                return effect.value;
            }
        }
        return value;
    },
});
exports.domEventHandlers = view_1.EditorView.domEventHandlers({
    keydown: function (event, view) {
        if (event.metaKey || event.ctrlKey) {
            view.dispatch({
                effects: exports.modKeyPressed.of(true),
            });
        }
    },
    keyup: function (event, view) {
        if (!event.metaKey && !event.ctrlKey) {
            view.dispatch({
                effects: exports.modKeyPressed.of(false),
            });
        }
    },
});
