/**
 * append child to parent. if parent is undefined, append child to body
 * @param parent parent element or string selector (may be undefined)
 * @param child child element or string selector
 */
export declare const appendChild: (parent: Element | string | undefined, child: Element | string) => void;
/**
 * convert selector (string) to Element. if already an Element, return as is.
 *
 * @param selector
 * @returns
 */
export declare const toElement: (selector: string | Element) => Element;
/**
 * convert selector (string) to HTMLElement. if already an HTMLElement, return as is.
 *
 * @param selector
 * @returns
 */
export declare const toHTMLElement: (selector: string | HTMLElement) => HTMLElement;
//# sourceMappingURL=index.d.ts.map