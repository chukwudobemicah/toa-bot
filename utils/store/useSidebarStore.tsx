import { create } from "zustand";

type SidebarStore = {
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: (state: boolean) => void;
  sidebarIsOpen: boolean;
  setSidebarIsOpen: (state: boolean) => void;
};

const useSidebarStore = create<SidebarStore>((set) => ({
  isMobileSidebarOpen: false,
  setIsMobileSidebarOpen: (state) => set({ isMobileSidebarOpen: state }),
  sidebarIsOpen: false,
  setSidebarIsOpen: (state) => set({ sidebarIsOpen: state }),
}));

export default useSidebarStore;
