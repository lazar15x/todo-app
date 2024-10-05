import { Dispatch, createContext } from "react";

interface FilterContext {
  currentFilter: number;
  setCurrentFilter: Dispatch<React.SetStateAction<number>>;
}

export const FilterContext = createContext<FilterContext>({
  currentFilter: 0,
  setCurrentFilter: () => 0,
});
