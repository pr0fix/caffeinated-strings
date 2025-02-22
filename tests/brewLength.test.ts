import { brewLength } from "../index";

test("brewLength should return the correct length of string", () => {
  expect(brewLength("coffee")).toBe(6);
});

test("brewLength should return the correct length for strings with spaces", () => {
  expect(brewLength(" ")).toBe(1);
  expect(brewLength("we love coffee")).toBe(14);
});

test("brewLength should return the correct length for strings with special characters", () => {
  expect(brewLength("café")).toBe(4);
  expect(brewLength("123!@#")).toBe(6);
});

test("brewLength should return 0 for an empty string", () => {
  expect(brewLength("")).toBe(0);
});

test("brewLength should return null for non strings", () => {
  expect(brewLength(0 as any)).toBeNull();
  expect(brewLength(true as any)).toBeNull();
  expect(brewLength({} as any)).toBeNull();
  expect(brewLength([] as any)).toBeNull();
  expect(brewLength(undefined as any)).toBeNull();
  expect(brewLength(null as any)).toBeNull();
});
