import { findFirstSip } from "../index";

test("findFirstSip should return the rest of string after char", () => {
  expect(findFirstSip("cappuccino", "p")).toBe("ppuccino");
});

test("findFirstSip should return null when there are more than one char", () => {
  expect(findFirstSip("cappuccino", "cc")).toBeNull();
});

test("findFirstSip should return null for non strings", () => {
  expect(findFirstSip(0 as any, "f")).toBeNull();
  expect(findFirstSip("coffee", true as any)).toBeNull();
  expect(findFirstSip({} as any, "f")).toBeNull();
  expect(findFirstSip("coffee", [] as any)).toBeNull();
  expect(findFirstSip(undefined as any, "f")).toBeNull();
  expect(findFirstSip("coffee", null as any)).toBeNull();
});
