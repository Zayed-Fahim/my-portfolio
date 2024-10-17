import { MetaData } from "@/components/molecules";
import React from "react";

export const metadata = MetaData({
  title: "Blog | Zayed Fahim",
  description:
    "Here, I posted blog articles. You can find all of my blog articles here.",
  url: "https://zayed-fahim.web.app/",
  ogImage: "https://zayed-fahim.web.app/og-image.jpg",
});

const BlogPage = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-6 lg::px-16 flex justify-center text-3xl font-incognito">
      Under construction 😔. Sorry for inconvinience.
    </div>
  );
};

export default BlogPage;
