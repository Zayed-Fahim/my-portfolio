import React from "react";

const Loading = () => {
  return (
    <div className="h-screen w-full flex gap-4 justify-center items-center">
      <span className="font-bold text-2xl xl:text-4xl text-[#00C4F0]">E</span>
      <span className="font-bold text-2xl xl:text-4xl text-[#00C4F0]">N</span>
      <span className="font-bold text-2xl xl:text-4xl text-[#00C4F0]">T</span>
      <span className="font-bold text-2xl xl:text-4xl text-[#00C4F0]">E</span>
      <span className="font-bold text-2xl xl:text-4xl text-[#00C4F0]">R</span>
      <span className="font-bold text-2xl xl:text-4xl text-[#00C4F0]">I</span>
      <span className="font-bold text-2xl xl:text-4xl text-[#00C4F0]">N</span>
      <span className="font-bold text-2xl xl:text-4xl text-[#00C4F0]">G</span>
      <div className="flex space-x-2 items-center animate-pulse">
        <div className="w-2 h-2 bg-[#E2A200] rounded-full"></div>
        <div className="w-3 h-3 bg-[#00C4F0] rounded-full"></div>
        <div className="w-4 h-4 bg-[#E2A200] rounded-full"></div>
        <div className="w-5 h-5 bg-[#00C4F0] rounded-full"></div>
      </div>
    </div>
  );
};

export default Loading;
