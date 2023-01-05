"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDomElement = exports.appendChild = void 0;
/**
 * append child to parent. if parent is undefined, append child to body
 * @param parent parent element or string selector (may be undefined)
 * @param child child element or string selector
 */
const appendChild = (parent, child) => {
    child = (0, exports.toDomElement)(child);
    if (parent !== undefined) {
        parent = (0, exports.toDomElement)(parent);
        parent.appendChild(child);
    }
    else {
        document.body.appendChild(child);
    }
};
exports.appendChild = appendChild;
/**
 * convert selector (string) to DOM Element. if already typeof Element, return as is.
 * @param selector
 * @returns
 */
const toDomElement = (selector) => {
    if (typeof selector === "string") {
        const element = document.querySelector(selector);
        if (!element) {
            throw new Error(`could not find the element with the selector: ${selector}`);
        }
        return element;
    }
    return selector;
};
exports.toDomElement = toDomElement;
//# sourceMappingURL=index.js.map