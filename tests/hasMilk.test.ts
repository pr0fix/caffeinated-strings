import { hasMilk } from "../src/index";

test("hasMilk should return true if string includes word", () => {
  expect(hasMilk("coffee tastes good with milk", "good")).toBe(true);
  expect(hasMilk("coffeetastesgoodwithmilk", "taste")).toBe(true);
});

test("hasMilk should return false if string does not include word", () => {
  expect(hasMilk("coffee tastes good even without milk", "bad")).toBe(false);
  expect(hasMilk("coffeetastesgoodevenwithoutmilk", "bad")).toBe(false);
});

test("hasMilk should return correctl values with space as 'word'-parameter", () => {
  expect(hasMilk("coffee tastes good with milk", " ")).toBe(true);
  expect(hasMilk("coffeetastesgoodevenwithoutmilk", " ")).toBe(false);
});

test("hasMilk should return null if either parameter is empty", () => {
  expect(hasMilk("coffeeisverygood", "")).toBeNull();
  expect(hasMilk("", "coffee")).toBeNull();
});

test("hasMilk should return null for non strings", () => {
  expect(hasMilk(0 as any, "coffee")).toBeNull();
  expect(hasMilk("coffee", true as any)).toBeNull();
  expect(hasMilk({} as any, "coffee")).toBeNull();
  expect(hasMilk("coffee", [] as any)).toBeNull();
  expect(hasMilk(undefined as any, "coffee")).toBeNull();
  expect(hasMilk("coffee", null as any)).toBeNull();
});
