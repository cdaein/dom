"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDomElement = void 0;
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