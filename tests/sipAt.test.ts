import { sipAt } from "../index";

test("sipAt should return char from string at given index", () => {
  expect(sipAt("cappuccino", 2)).toBe("p");
  expect(sipAt("cappuccino", 6)).toBe("c");
});

test("sipAt should return null for char not found", () => {
  expect(sipAt("cappuccino", -1)).toBeNull();
  expect(sipAt("cappuccino", 15)).toBeNull();
});

test("sipAt should return null for non strings", () => {
  expect(sipAt(0 as any, "cappuccino" as any)).toBeNull();
  expect(sipAt("cappuccino" as any, true as any)).toBeNull();
  expect(sipAt({} as any, "cappuccino" as any)).toBeNull();
  expect(sipAt("cappuccino" as any, [] as any)).toBeNull();
  expect(sipAt(undefined as any, "cappuccino" as any)).toBeNull();
  expect(sipAt("cappuccino" as any, null as any)).toBeNull();
});
