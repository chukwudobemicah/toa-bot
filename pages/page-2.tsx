import ChatLayout from "@/components/Layout/ChatLayout";
import Layout from "@/components/Layout/Layout";
import Page2ChatBox from "@/components/Page2/Page2ChatBox";
import React, { ReactElement } from "react";

export default function Page2() {
  return (
    <div className="w-full">
      <Page2ChatBox />
    </div>
  );
}

Page2.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <ChatLayout>{page}</ChatLayout>
    </Layout>
  );
};
