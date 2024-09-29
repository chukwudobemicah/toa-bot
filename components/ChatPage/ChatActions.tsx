// components/ChatPlaceholder.tsx

import Icon from "../icon-selector/icon-selector";

export default function ChatActions() {
  return (
    <div className="flex h-screen flex-col min-w-[230px] items-center justifycenter bg-secondary text-gray-300">
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
