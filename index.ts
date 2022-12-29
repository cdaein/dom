/**
 * convert selector (string) to DOM Element. if already typeof Element, return as is.
 * @param selector
 * @returns
 */
export const toDomElement = (selector: string | Element) => {
  if (typeof selector === "string") {
    const element = document.querySelector(selector);
    if (!element) {
      throw new Error(
        `could not find the element with the selector: ${selector}`
      );
    }
    return element;
  }
  return selector;
};
