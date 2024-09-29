import React, { ReactElement } from "react";
import ChatActions from "../ChatPage/ChatActions";

export default function ChatLayout({ children }: { children: ReactElement }) {
  return (
    <div className="flex">
      <ChatActions />
      {children}
    </div>
  );
}
