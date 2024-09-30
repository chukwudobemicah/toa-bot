import ChatBox from "@/components/ChatPage/ChatBox";
import ChatLayout from "@/components/Layout/ChatLayout";
import Layout from "@/components/Layout/Layout";
import React, { ReactElement } from "react";

export default function Page4() {
  return (
    <div className="w-full">
      <ChatBox />
    </div>
  );
}

Page4.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <ChatLayout>{page}</ChatLayout>
    </Layout>
  );
};
