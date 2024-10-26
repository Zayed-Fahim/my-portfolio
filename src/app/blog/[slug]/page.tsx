import React from "react";

const Blog = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <h1>{params.slug}</h1>
    </div>
  );
};

export default Blog;
