// components/ChatPlaceholder.tsx

import useSidebarStore from "@/utils/store/useSidebarStore";
import Icon from "../icon-selector/icon-selector";
import { cn } from "@/utils/functions";
import Overlay from "../Overlay/Overlay";

export default function ChatActions() {
  const { isAddChatOpen, setIsAddChatOpen } = useSidebarStore();
  return (
    <div
      onClick={() => {
        console.log("chats");
      }}
      className={cn(
        "flex h-screen max-lg:h-[calc(100vh-64px)] max-lg:z-[9999999999] transition-all duration-300 ease-in-out max-lg:w-[80vw] max-lg:translate-x-[200%] max-lg:absolute max-lg:right-0  flex-col lg:min-w-[230px] items-center justifycenter bg-secondary text-gray-300",
        {
          "max-lg:!translate-x-0": isAddChatOpen,
        }
      )}
    >
      {/* <Overlay
        className="-z-10"
        isOpen={isAddChatOpen}
        onClick={() => {
          setIsAddChatOpen(false);
        }}
      /> */}
      {/* <Overlay
        // className="absolute"
        isOpen={isAddChatOpen}
        onClick={() => {
          setIsAddChatOpen(false);
        }}
      /> */}
      {/* New Chat Button */}
      <button className="flex items-center font-segoe-ui-symbol justify-between mt-8 gap-4 px-8 py-4 mb-8 bg-[#18181B] rounded-2xl text-white text-xs">
        <div>
          <Icon iconType={"add"} className="w-4 text-white" />
        </div>
        <p>Make a new chat</p>
      </button>

      {/* No Recent Chats Message */}
      <div className="text-center h-full flex flex-col justify-center items-center">
        <p className="font-medium text-sm">No recent chats</p>
        <p className="text-xs text-gray-500">
          Your chat history will appear here
        </p>
      </div>
    </div>
  );
}
