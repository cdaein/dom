import { describe, expect, test, afterEach, beforeEach } from "@jest/globals";
import "jest-canvas-mock";
import { toDomElement, appendChild } from "./index";

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

describe("toDomElement()", () => {
  test("test", () => {
    // expect(toDomElement('div'));
  });
});
