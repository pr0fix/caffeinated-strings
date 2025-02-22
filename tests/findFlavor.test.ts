import { findFlavor } from "../index";

test("findFlavor should return substring correctly", () => {
  expect(findFlavor("cappuccino", "cc")).toBe("ccino");
  expect(findFlavor("espresso", "press")).toBe("presso");
  expect(findFlavor("mocha", "m")).toBe("mocha");
});

test("findFlavor should return null when substring is not found", () => {
  expect(findFlavor("latte", "tea")).toBeNull();
});

test("findFlavor should return null for non strings", () => {
  expect(findFlavor(0 as any, "ff")).toBeNull();
  expect(findFlavor("coffee", true as any)).toBeNull();
  expect(findFlavor({} as any, "ff")).toBeNull();
  expect(findFlavor("coffee", [] as any)).toBeNull();
  expect(findFlavor(undefined as any, "ff")).toBeNull();
  expect(findFlavor("coffee", null as any)).toBeNull();
});
