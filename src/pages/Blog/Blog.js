import React from "react";

const Blog = () => {
  return (
    <div className="bg-gradient-to-r from-[#2C2C2C] to-[#1C1C1C] h-screen flex justify-center items-center">
      <span className=" text-white text-3xl lg:text-8xl">COMING SOON</span>
      <div className="flex gap-2 lg:gap-4">
        <span className="loading loading-dots loading-xs text-[#E2A200]"></span>
        <span className="loading loading-dots loading-sm text-[#00C4F0]"></span>
        <span className="loading loading-dots loading-md text-[#E2A200]"></span>
        <span className="loading loading-dots loading-lg text-[#00C4F0]"></span>
      </div>
    </div>
  );
};

export default Blog;
