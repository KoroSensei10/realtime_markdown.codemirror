"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectionInNode = selectionInNode;
function selectionInNode(view, nodeFrom, nodeTo) {
    // target only the main selection
    // ? maybe extended to cover multiple selections in the future
    var r = view.state.selection.main;
    // selection starts before node and ends inside or after node
    if (r.from <= nodeFrom && r.to >= nodeFrom)
        return true;
    // selection starts after the end of node and ends after node
    if (r.from <= nodeTo && r.to >= nodeTo)
        return true;
    // selection is completely inside node
    if (r.from >= nodeFrom && r.to <= nodeTo)
        return true;
    return false;
}
