import PostsLayout from "@/components/Layout/PostsLayout";
import Layout from "@/components/Layout/Layout";
import SocialPosts from "@/components/SocialTensorPage/SocialPosts";
import React, { ReactElement } from "react";

export default function SocialTensor() {
  return (
    <div className="w-full">
      <SocialPosts />
      {/* <ChatBox /> */}
    </div>
  );
}

SocialTensor.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <PostsLayout>{page}</PostsLayout>
    </Layout>
  );
};
