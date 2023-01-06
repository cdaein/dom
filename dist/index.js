/**
 * append child to parent. if parent is undefined, append child to body
 * @param parent parent element or string selector (may be undefined)
 * @param child child element or string selector
 */
export const appendChild = (parent, child) => {
    child = toElement(child);
    if (parent !== undefined) {
        parent = toElement(parent);
        parent.appendChild(child);
    }
    else {
        document.body.appendChild(child);
    }
};
/**
 * convert selector (string) to Element. if already typeof Element, return as is.
 *
 * @param selector
 * @returns
 */
export const toElement = (selector) => {
    if (typeof selector === "string") {
        const element = document.querySelector(selector);
        if (!element) {
            throw new Error(`could not find the element with the selector: ${selector}`);
        }
        return element;
    }
    return selector;
};
/**
 * convert selector (string) to HTMLElement. if already typeof HTMLElement, return as is.
 *
 * @param selector
 * @returns
 */
export const toHTMLElement = (selector) => {
    if (typeof selector === "string") {
        const element = document.querySelector(selector);
        if (!element) {
            throw new Error(`could not find the element with the selector: ${selector}`);
        }
        return element;
    }
    return selector;
};
//# sourceMappingURL=index.js.map