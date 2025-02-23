import { froth } from "../src/index";

test("froth to return string in uppercase", () => {
  expect(froth("coffee")).toBe("COFFEE");
  expect(froth("cOfFeE")).toBe("COFFEE");
});

test("froth should not return a string containing lowercase letters", () => {
  expect(froth("coffee")).not.toBe("coffee");
  expect(froth("COFFEE")).not.toBe("coffee");
  expect(froth("cOfFeE")).not.toBe("CoFfEe");
});

test("froth should return null for non strings", () => {
  expect(froth(0 as any)).toBeNull();
  expect(froth(true as any)).toBeNull();
  expect(froth({} as any)).toBeNull();
  expect(froth([] as any)).toBeNull();
  expect(froth(undefined as any)).toBeNull();
  expect(froth(null as any)).toBeNull();
});
