// components/ChatPlaceholder.tsx

export default function ChatActions() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-gray-300">
      {/* New Chat Button */}
      <button className="flex items-center gap-2 px-6 py-3 mb-8 bg-gray-800 hover:bg-gray-700 rounded-full text-white shadow-md">
        {/* <PlusCircleIcon className="w-6 h-6" /> */}= Make a new chat
      </button>

      {/* No Recent Chats Message */}
      <div className="text-center">
        <p className="text-lg font-medium">No recent chats</p>
        <p className="text-sm text-gray-500">
          Your chat history will appear here
        </p>
      </div>
    </div>
  );
}
