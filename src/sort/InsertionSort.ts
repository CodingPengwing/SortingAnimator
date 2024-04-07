import { SortFunctionInitializer, Step } from "./types";
import { match } from "ts-pattern";

export const InsertionSort: SortFunctionInitializer<
  number,
  "SIMPLE" | "IMPROVED"
> = (compare, variant) => {
  function simpleInsertionSort(array: number[]) {
    const initial = array.slice();
    const steps: Step[] = [];
    for (let i = 1; i < array.length; i++) {
      for (let j = i; j > 0 && compare(array[j - 1], array[j]) > 0; j--) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      }
    }

    return { initial, final: [...array], steps };
  }

  function improvedInsertionSort(array: number[]) {
    const initial = array.slice();
    const steps: Step[] = [];
    for (let i = 1; i < array.length; i++) {
      const current = array[i];
      let j = i;
      while (j > 0 && compare(array[j - 1], current) > 0) {
        array[j] = array[j - 1];
        j--;
      }
      array[j] = current;
    }
    return { initial, final: [...array], steps };
  }

  return match(variant)
    .with("SIMPLE", () => simpleInsertionSort)
    .with("IMPROVED", () => improvedInsertionSort)
    .exhaustive();
};
