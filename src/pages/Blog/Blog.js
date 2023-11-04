import React from "react";

const Blog = () => {
  return (
    <div className="bg-gradient-to-r from-[#2C2C2C] to-[#1C1C1C] h-screen flex justify-center items-center gap-2">
      <span className=" text-white text-3xl lg:text-8xl">COMING SOON</span>
      <div className="flex space-x-2 items-center animate-pulse">
        <div className="w-2 h-2 bg-[#E2A200] rounded-full"></div>
        <div className="w-3 h-3 bg-[#00C4F0] rounded-full"></div>
        <div className="w-4 h-4 bg-[#E2A200] rounded-full"></div>
        <div className="w-5 h-5 bg-[#00C4F0] rounded-full"></div>
      </div>
    </div>
  );
};

export default Blog;
