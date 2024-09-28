import ChatBox from "@/components/ChatPage/ChatBox";
import ChatLayout from "@/components/Layout/ChatLayout";
import Layout from "@/components/Layout/Layout";
import SocialPosts from "@/components/SocialTensorPage/SocialPosts";
import React, { ReactElement } from "react";

export default function SocialTensor() {
  return (
    <div>
      <SocialPosts />
      {/* <ChatBox /> */}
    </div>
  );
}

SocialTensor.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <ChatLayout>{page}</ChatLayout>
    </Layout>
  );
};
