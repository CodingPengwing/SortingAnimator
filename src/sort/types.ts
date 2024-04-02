import { Comparator } from "../comparator";
import { ItemType } from "../types";

type Index = number;
type IndexPair = [Index, Index];
type IndexRange = { from: Index; to: Index };
type Focus = { primary: IndexRange[]; secondary: IndexRange[] };
type SubDivision = { subArrays: IndexRange[]; dividers: Index[] };

export type Step = { focus: Focus } & (
  | { type: "COMPARE_ITEMS"; target: IndexPair }
  | { type: "SWAP_ITEMS"; target: IndexPair }
  | { type: "CHOOSE_PIVOT"; target: Index }
  | { type: "DIVIDE"; target: SubDivision }
  | { type: "SORTED"; target: IndexRange }
);

export type SortResult<T extends ItemType> = {
  initial: T[];
  final: T[];
  steps: Step[];
};

export type SortFunction<T extends ItemType> = (array: T[]) => SortResult<T>;

export type SortFunctionInitializer<
  T extends ItemType,
  V extends string | undefined = undefined
> = (comparator: Comparator<T>, variant: V) => SortFunction<T>;
