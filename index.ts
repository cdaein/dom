/**
 * append child to parent. if parent is undefined, append child to body
 * @param parent parent element or string selector (may be undefined)
 * @param child child element or string selector
 */

export const appendChild = (
  parent: Element | string | undefined,
  child: Element | string
) => {
  child = toElement(child);

  if (parent !== undefined) {
    parent = toElement(parent);
    parent.appendChild(child);
  } else {
    document.body.appendChild(child);
  }
};

/**
 * convert selector (string) to Element. if already an Element, return as is.
 *
 * @param selector
 * @returns
 */
export const toElement = (selector: string | Element) => {
  if (typeof selector === "string") {
    const element = document.querySelector(selector);
    if (!element) {
      throw new Error(
        `could not find the element with the selector: ${selector}`
      );
    }
    return element;
  } else if (selector instanceof Element) {
    return selector;
  }
  throw new Error("input must be either string or Element");
};

/**
 * convert selector (string) to HTMLElement. if already an HTMLElement, return as is.
 *
 * @param selector
 * @returns
 */
export const toHTMLElement = (selector: string | HTMLElement) => {
  if (typeof selector === "string") {
    const element = document.querySelector(selector) as HTMLElement;
    if (!element) {
      throw new Error(
        `could not find the element with the selector: ${selector}`
      );
    }
    return element;
  } else if (selector instanceof HTMLElement) {
    return selector;
  }
  throw new Error("input must be either string or HTMLElement");
};
