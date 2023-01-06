"use strict";
/**
 * append child to parent. if parent is undefined, append child to body
 * @param parent parent element or string selector (may be undefined)
 * @param child child element or string selector
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHTMLElement = exports.toElement = exports.appendChild = void 0;
const appendChild = (parent, child) => {
    child = (0, exports.toElement)(child);
    if (parent !== undefined) {
        parent = (0, exports.toElement)(parent);
        parent.appendChild(child);
    }
    else {
        document.body.appendChild(child);
    }
};
exports.appendChild = appendChild;
/**
 * convert selector (string) to Element. if already typeof Element, return as is.
 *
 * @param selector
 * @returns
 */
const toElement = (selector) => {
    if (typeof selector === "string") {
        const element = document.querySelector(selector);
        if (!element) {
            throw new Error(`could not find the element with the selector: ${selector}`);
        }
        return element;
    }
    return selector;
};
exports.toElement = toElement;
/**
 * convert selector (string) to HTMLElement. if already typeof HTMLElement, return as is.
 *
 * @param selector
 * @returns
 */
const toHTMLElement = (selector) => {
    if (typeof selector === "string") {
        const element = document.querySelector(selector);
        if (!element) {
            throw new Error(`could not find the element with the selector: ${selector}`);
        }
        return element;
    }
    return selector;
};
exports.toHTMLElement = toHTMLElement;
//# sourceMappingURL=index.js.map