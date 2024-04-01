import { ItemType } from "./types";

export type Comparator<T extends ItemType> = (item1: T, item2: T) => number;
export type SortDirection = "ASC" | "DESC";

type ComparatorGroup<T extends ItemType> = Record<SortDirection, Comparator<T>>;

export class ComparatorLibrary {
  NUMBER: ComparatorGroup<number> = {
    ASC: (num1, num2) => num1 - num2,
    DESC: (num1, num2) => num2 - num1,
  };
}
