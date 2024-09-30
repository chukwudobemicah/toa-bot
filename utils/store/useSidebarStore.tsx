import { create } from "zustand";

type SidebarStore = {
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: (state: boolean) => void;
  sidebarIsOpen: boolean;
  setSidebarIsOpen: (state: boolean) => void;
  isAddChatOpen: boolean;
  setIsAddChatOpen: (state: boolean) => void;
};

const useSidebarStore = create<SidebarStore>((set) => ({
  isMobileSidebarOpen: false,
  setIsMobileSidebarOpen: (state) => set({ isMobileSidebarOpen: state }),
  sidebarIsOpen: false,
  setSidebarIsOpen: (state) => set({ sidebarIsOpen: state }),
  isAddChatOpen: false,
  setIsAddChatOpen: (state) => set({ isAddChatOpen: state }),
}));

export default useSidebarStore;
