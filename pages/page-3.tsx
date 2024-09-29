import ChatLayout from "@/components/Layout/ChatLayout";
import Layout from "@/components/Layout/Layout";
import Page3ChatBox from "@/components/Page3/Page3ChatBox";
import React, { ReactElement } from "react";

export default function Page3() {
  return (
    <div className="w-full">
      <Page3ChatBox />
    </div>
  );
}

Page3.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <ChatLayout>{page}</ChatLayout>
    </Layout>
  );
};
