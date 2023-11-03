import React from "react";

const MediaLoader = () => {
  return (
    <div className="h-screen w-full flex lg:flex-row flex-col gap-4 justify-center items-center">
      <div className="flex space-x-2 items-center pt-4 animate-pulse">
        <div className="w-2 h-2 bg-[#E2A200] rounded-full"></div>
        <div className="w-3 h-3 bg-[#00C4F0] rounded-full"></div>
        <div className="w-4 h-4 bg-[#E2A200] rounded-full"></div>
        <div className="w-5 h-5 bg-[#00C4F0] rounded-full"></div>
      </div>
    </div>
  );
};

export default MediaLoader;
