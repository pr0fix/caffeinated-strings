import { addMilk } from "../src/index";

test("addMilk should return the two strings concatenated with delimiter in between", () => {
  expect(addMilk("coffee tastes", "very good with milk", " ")).toBe(
    "coffee tastes very good with milk"
  );
  expect(addMilk("coffee tastes", "very good with milk", ",")).toBe(
    "coffee tastes,very good with milk"
  );
  expect(addMilk("coffee tastes", "very good with milk", " ! ")).toBe(
    "coffee tastes ! very good with milk"
  );
});

test("addMilk should return null for non strings", () => {
  expect(addMilk(0 as any, 0 as any, " ")).toBeNull();
  expect(addMilk("coffee", true as any, " ")).toBeNull();
  expect(addMilk({} as any, "coffee", " ")).toBeNull();
  expect(addMilk("coffee", "tastes very good", [] as any)).toBeNull();
  expect(addMilk(undefined as any, "tastes very good", " ")).toBeNull();
  expect(addMilk(null as any, null as any, null as any)).toBeNull();
});
