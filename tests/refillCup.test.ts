import { refillCup } from "../src/index";

test("refillCup should return the correct string the right amount of times", () => {
  expect(refillCup("coffee ", 6)).toBe(
    "coffee coffee coffee coffee coffee coffee "
  );
  expect(refillCup("cappuccino", 2)).toBe("cappuccinocappuccino");
});

test("refillCup should work with extended Latin alphabets and special characters", () => {
  expect(refillCup("café", 2)).toBe("cafécafé");
  expect(refillCup("123!@#ääööåå", 2)).toBe("123!@#ääööåå123!@#ääööåå");
});

test("refillCup should return empty string when the input string is empty", () => {
  expect(refillCup("", 500)).toBe(null);
});

test("refillCup should return null for count lower and equal to 0", () => {
  expect(refillCup("coffee", -100)).toBe(null);
});

test("refillCup should return null for non string or number values", () => {
  expect(refillCup(0 as any, "cappuccino" as any)).toBeNull();
  expect(refillCup("cappuccino" as any, true as any)).toBeNull();
  expect(refillCup({} as any, "cappuccino" as any)).toBeNull();
  expect(refillCup("cappuccino" as any, [] as any)).toBeNull();
  expect(refillCup(undefined as any, "cappuccino" as any)).toBeNull();
  expect(refillCup("cappuccino" as any, null as any)).toBeNull();
});
