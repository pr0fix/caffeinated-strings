import { pourCoffee } from "../index";

test("pourCoffee should return copy of string", () => {
  expect(pourCoffee("coffee")).toBe("coffee");
});

test("pourCoffee should not return incorrect copy of string", () => {
  expect(pourCoffee("coffee")).not.toBe("COFFEE");
  expect(pourCoffee("coffee")).not.toBe("Coffee");
  expect(pourCoffee("coffee")).not.toBe("coffeee");
});

test("pourCoffee should return null for non strings", () => {
  expect(pourCoffee(0 as any)).toBeNull();
  expect(pourCoffee(true as any)).toBeNull();
  expect(pourCoffee({} as any)).toBeNull();
  expect(pourCoffee([] as any)).toBeNull();
  expect(pourCoffee(undefined as any)).toBeNull();
  expect(pourCoffee(null as any)).toBeNull();
});
