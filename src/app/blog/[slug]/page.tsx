import React from "react";

export async function generateStaticParams() {
  const slugs = ["test-slug", "another-slug", "third-slug"];

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

const Blog = ({ params }: { params: { slug: string } }) => {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      this is {params.slug} 1 page
    </article>
  );
};

export default Blog;
