import { coolDown } from "../src/index";

test("coolDown should return string in lowercase", () => {
  expect(coolDown("COFFEE")).toBe("coffee");
  expect(coolDown("cOfFeE")).toBe("coffee");
});

test("coolDown should return string with extended Latin alphabets in lowercase", () => {
  expect(coolDown("ÄÖÅ")).toBe("äöå");
});

test("coolDown should not return a string containing uppercase letters", () => {
  expect(coolDown("coffee")).not.toBe("COFFEE");
  expect(coolDown("COFFEE")).not.toBe("COFFEE");
  expect(coolDown("cOfFeE")).not.toBe("COFFEE");
});

test("coolDown should return null for non strings", () => {
  expect(coolDown(0 as any)).toBeNull();
  expect(coolDown(true as any)).toBeNull();
  expect(coolDown({} as any)).toBeNull();
  expect(coolDown([] as any)).toBeNull();
  expect(coolDown(undefined as any)).toBeNull();
  expect(coolDown(null as any)).toBeNull();
});
