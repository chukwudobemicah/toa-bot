import { create } from "zustand";

type FilterStore = {
  minMaxDevHoldings: number[] | undefined;
  setMinMaxDevHoldings: (state: number[] | undefined) => void;
  minMaxHolderCount: number[] | undefined;
  setMinMaxHolderCount: (state: number[] | undefined) => void;
  minMaxMarketCap: number[] | undefined;
  setMinMaxMarketCap: (state: number[] | undefined) => void;
  minMaxBondingCurve: number[] | undefined;
  setMinMaxBondingCurve: (state: number[] | undefined) => void;
  minMaxKoth: number[] | undefined;
  setMinMaxKoth: (state: number[] | undefined) => void;
};

const useFilterStore = create<FilterStore>((set) => ({
  minMaxDevHoldings: undefined,
  setMinMaxDevHoldings: (state) => set({ minMaxDevHoldings: state }),
  minMaxHolderCount: undefined,
  setMinMaxHolderCount: (state) => set({ minMaxHolderCount: state }),
  minMaxMarketCap: undefined,
  setMinMaxMarketCap: (state) => set({ minMaxMarketCap: state }),
  minMaxBondingCurve: undefined,
  setMinMaxBondingCurve: (state) => set({ minMaxBondingCurve: state }),
  minMaxKoth: undefined,
  setMinMaxKoth: (state) => set({ minMaxKoth: state }),
}));

export default useFilterStore;
