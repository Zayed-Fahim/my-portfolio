import { MetaData } from "@/components/molecules";
import { BlogTemplate } from "@/components/templates";
import React from "react";

export const metadata = MetaData({
  title: "Blog | Zayed Fahim",
  description:
    "Here, I posted blog articles. You can find all of my blog articles here.",
  url: "https://zayed-fahim.web.app/blog",
  ogImage: "https://zayed-fahim.web.app/og-image.jpg",
});

const BlogPage = () => {
  return <BlogTemplate />;
};

export default BlogPage;
