import { create } from "zustand";

type ChatBoxIsOpenType = {
  chatboxIsOpen: boolean;
  setChatboxIsOpen: (isOpen: boolean) => void;
  // groupPreviewChats: boolean;
  // setGroupPreviewChats: (state: boolean) => void;
  // isMobileSidebarOpen: boolean;
  // setIsMobileSidebarOpen: (state: boolean) => void;
};

const useChatBoxIsOpenStore = create<ChatBoxIsOpenType>((set) => ({
  chatboxIsOpen: false,
  setChatboxIsOpen: (isOpen) => set({ chatboxIsOpen: isOpen }),
  // groupPreviewChats: false,
  // setGroupPreviewChats: (state) => set({ groupPreviewChats: state }),
  // isMobileSidebarOpen: false,
  // setIsMobileSidebarOpen: (state) => set({ isMobileSidebarOpen: state }),
}));

export default useChatBoxIsOpenStore;
