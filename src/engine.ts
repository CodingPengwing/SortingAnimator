import { ItemType } from "./types";

type Index = number;
type IndexPair = [Index, Index];
type IndexRange = { from: Index; to: Index };
type Focus = { primary: IndexRange[]; secondary: IndexRange[] };
type Division = { subArrays: IndexRange[]; dividers: Index[] };

export type Step = { focus: Focus } & (
  | { type: "COMPARE_ITEMS"; target: IndexPair }
  | { type: "SWAP_ITEMS"; target: IndexPair }
  | { type: "CHOOSE_PIVOT"; target: Index }
  | { type: "DIVIDE"; target: Division }
  | { type: "SORTED"; target: IndexRange }
);

export type SortFunction<T extends ItemType> = (array: T[]) => {
  result: T[];
  steps: Step[];
};

class Engine {
  public sort() {}
}
