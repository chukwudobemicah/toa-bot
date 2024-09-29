import React, { ReactElement } from "react";
import ChatActions from "../ChatPage/ChatActions";
import Properties from "../SocialTensorPage/Properties";

export default function PostsLayout({ children }: { children: ReactElement }) {
  return (
    <div className="flex">
      <ChatActions />
      {children}
      <Properties />
    </div>
  );
}
