import { sip } from "../src/index";

test("sip should remove whitespace from string", () => {
  expect(sip("  coffee    ")).toBe("coffee");
});

test("sip should remove whitespace correctly for strings with spaces", () => {
  expect(sip("   coffee is what we love!    ")).toBe("coffee is what we love!");
  expect(sip("we love coffee")).toBe("we love coffee");
});

test("sip should remove whitespace from strings with special characters", () => {
  expect(sip("    café  ")).toBe("café");
  expect(sip("   123!@#  ")).toBe("123!@#");
});

test("sip should return null for an empty string", () => {
  expect(sip("")).toBeNull();
});

test("sip should return null for non strings", () => {
  expect(sip(0 as any)).toBeNull();
  expect(sip(true as any)).toBeNull();
  expect(sip({} as any)).toBeNull();
  expect(sip([] as any)).toBeNull();
  expect(sip(undefined as any)).toBeNull();
  expect(sip(null as any)).toBeNull();
});
