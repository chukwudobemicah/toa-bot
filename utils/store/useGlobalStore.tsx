import { create } from "zustand";

type GlobalStore = {
  pairUpdateCount: number;
  setPairUpdateCount: (state: number) => void;
  incrementPairUpdateCount: () => void;
};

const useGlobalStore = create<GlobalStore>((set) => ({
  pairUpdateCount: 0,
  setPairUpdateCount: (state) => set({ pairUpdateCount: state }),
  incrementPairUpdateCount: () => set((state) => ({ pairUpdateCount: state.pairUpdateCount + 1 })),
}));

export default useGlobalStore;
