/**
 * append child to parent. if parent is undefined, append child to body
 * @param parent parent element or string selector (may be undefined)
 * @param child child element or string selector
 */
export declare const appendChild: (parent: Element | string | undefined, child: Element | string) => void;
/**
 * convert selector (string) to DOM Element. if already typeof Element, return as is.
 * @param selector
 * @returns
 */
export declare const toDomElement: (selector: string | Element) => Element;
//# sourceMappingURL=index.d.ts.map