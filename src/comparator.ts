import { ItemType } from "./types";

export type Comparator<T extends ItemType> = (item1: T, item2: T) => number;
export type Order = "ASC" | "DESC";

export function NumberComparator(order: Order): Comparator<number> {
  return order === "ASC"
    ? (num1, num2) => num1 - num2
    : (num1, num2) => num2 - num1;
}
