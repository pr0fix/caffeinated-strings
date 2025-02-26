import { compareBeans } from "../src/index";

test("compareBeans should return 1", () => {
  expect(compareBeans("cappuccino", "americano")).toBe(1);
});

test("compareBeans should return -1", () => {
  expect(compareBeans("americano", "cappuccino")).toBe(-1);
});

test("compareBeans should return 0", () => {
  expect(compareBeans("americano", "americano")).toBe(0);
});

test("compareBeans should return null for non strings", () => {
  expect(compareBeans(0 as any, "coffee")).toBeNull();
  expect(compareBeans("coffee", true as any)).toBeNull();
  expect(compareBeans({} as any, "coffee")).toBeNull();
  expect(compareBeans("coffee", [] as any)).toBeNull();
  expect(compareBeans(undefined as any, "coffee")).toBeNull();
  expect(compareBeans("coffee", null as any)).toBeNull();
});
