import { NumberComparator } from "./comparator";

describe("Number comparators", () => {
  const ascComparator = NumberComparator("ASC");
  const descComparator = NumberComparator("DESC");
  test("work correctly", () => {
    expect(ascComparator(1, 2)).toBe(-1);
    expect(ascComparator(2, 1)).toBe(1);
    expect(ascComparator(1, 1)).toBe(0);
    expect(descComparator(1, 2)).toBe(1);
    expect(descComparator(2, 1)).toBe(-1);
    expect(descComparator(1, 1)).toBe(0);
  });
});
