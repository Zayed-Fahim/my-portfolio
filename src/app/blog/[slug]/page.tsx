import React from "react";

export async function generateStaticParams() {
  return {
    slug: "test-slug",
  };
}

const Blog = ({ params }: { params: { slug: string } }) => {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">{params.slug}</article>
  );
};

export default Blog;
