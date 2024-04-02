import { NumberComparator } from "../comparator";
import { InsertionSort } from "./InsertionSort";
import { SortResult } from "./types";

const comparator = NumberComparator("ASC");

describe("InsertionSort", () => {
  describe("simpleInsertionSort", () => {
    const sort = InsertionSort(comparator, "SIMPLE");
    const array = [5, 2, 4, 1, 3];
    const result = sort(array);
    it("should sort correctly", () => {
      expect(result).toEqual<SortResult<number>>({
        initial: [5, 2, 4, 1, 3],
        final: [1, 2, 3, 4, 5],
        steps: [],
      });
    });
  });

  describe("improvedInsertionSort", () => {
    const sort = InsertionSort(comparator, "IMPROVED");
    const array = [5, 2, 4, 1, 3];
    const result = sort(array);
    it("should sort correctly", () => {
      expect(result).toEqual<SortResult<number>>({
        initial: [5, 2, 4, 1, 3],
        final: [1, 2, 3, 4, 5],
        steps: [],
      });
    });
  });
});
