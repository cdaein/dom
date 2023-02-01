import { describe, expect, test, afterEach, beforeEach } from "@jest/globals";
import "jest-canvas-mock";
import { appendChild, toElement } from "./index";

describe("appendChild()", () => {
  let parent: HTMLDivElement;
  let child: HTMLParagraphElement;

  beforeEach(() => {
    parent = document.createElement("div");
    parent.id = "parent";
    document.body.appendChild(parent);

    child = document.createElement("p");
    child.id = "child";
    document.body.appendChild(child);
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  test("appends parent(string) with child(string) ", () => {
    appendChild("#parent", "#child");
    expect(child.parentElement).toBe(parent);
  });

  test("appends parent(string) with child(Element)", () => {
    appendChild("#parent", child);
    expect(child.parentElement).toBe(parent);
  });

  test("appends parent(Element) with child(string)", () => {
    appendChild(parent, "#child");
    expect(child.parentElement).toBe(parent);
  });

  test("appends parent(Element) with child(Element)", () => {
    appendChild(parent, child);
    expect(child.parentElement).toBe(parent);
  });

  test("add child(string) to body when parent is undefined", () => {
    appendChild(undefined, "#child");
    expect(child.parentElement).toBe(document.querySelector("body"));
  });

  test("add child(Element) to body when parent is undefined", () => {
    appendChild(undefined, child);
    expect(child.parentElement).toBe(document.querySelector("body"));
  });
});

describe("toElement()", () => {
  // Element | HTMLElement | HTMLDivElement;
  const div = document.createElement("div");
  document.body.appendChild(div);

  const divFromString = toElement("div");
  const divFromElement = toElement(div);

  beforeEach(() => {
    //
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  test("> starting div has correct type (Element, HTMLElement, HTMLDivElement)", () => {
    expect(div instanceof Element).toBe(true);
    expect(div instanceof HTMLElement).toBe(true);
    expect(div instanceof HTMLDivElement).toBe(true);
    expect(div instanceof HTMLAnchorElement).toBe(false);
  });

  test("converts string input to Element", () => {
    expect(divFromString instanceof Element).toBe(true);
    expect(divFromString instanceof HTMLElement).toBe(true);
    expect(divFromString instanceof HTMLDivElement).toBe(true);
    expect(divFromString instanceof HTMLSelectElement).toBe(false);
    expect(div === divFromString).toBe(true);
  });

  test("returns Element as is", () => {
    expect(divFromElement instanceof Element).toBe(true);
    expect(divFromElement instanceof HTMLElement).toBe(true);
    expect(divFromElement instanceof HTMLDivElement).toBe(true);
    expect(divFromElement instanceof HTMLParagraphElement).toBe(false);
    expect(div === divFromElement).toBe(true);
  });

  test("throws when wrong input given", () => {
    // expect(toElement("345")).toThrow();
    // expect(toElement("diiv")).toThrow();
  });
});
