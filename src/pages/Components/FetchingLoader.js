import React from "react";

const FetchingLoader = () => {
  return (
    <div className="h-screen w-full flex gap-4 justify-center items-center">
      <div className="flex gap-2">
        <div className="flex gap-[2px]">
          <span className="font-bold text-2xl xl:text-4xl text-[#E2A200]">
            D
          </span>
          <span className="font-bold text-2xl xl:text-4xl text-[#E2A200]">
            a
          </span>
          <span className="font-bold text-2xl xl:text-4xl text-[#E2A200]">
            t
          </span>
          <span className="font-bold text-2xl xl:text-4xl text-[#E2A200]">
            a
          </span>
        </div>
        <div className="flex gap-[2px]">
          <span className="font-bold text-2xl xl:text-4xl text-[#00C4F0]">
            F
          </span>
          <span className="font-bold text-2xl xl:text-4xl text-[#00C4F0]">
            e
          </span>
          <span className="font-bold text-2xl xl:text-4xl text-[#00C4F0]">
            t
          </span>
          <span className="font-bold text-2xl xl:text-4xl text-[#00C4F0]">
            c
          </span>
          <span className="font-bold text-2xl xl:text-4xl text-[#00C4F0]">
            h
          </span>
          <span className="font-bold text-2xl xl:text-4xl text-[#00C4F0]">
            i
          </span>
          <span className="font-bold text-2xl xl:text-4xl text-[#00C4F0]">
            n
          </span>
          <span className="font-bold text-2xl xl:text-4xl text-[#00C4F0]">
            g
          </span>
        </div>
      </div>
      <div className="flex space-x-2 items-center pt-4 animate-pulse">
        <div className="w-2 h-2 bg-[#E2A200] rounded-full"></div>
        <div className="w-3 h-3 bg-[#00C4F0] rounded-full"></div>
        <div className="w-4 h-4 bg-[#E2A200] rounded-full"></div>
        <div className="w-5 h-5 bg-[#00C4F0] rounded-full"></div>
      </div>
    </div>
  );
};

export default FetchingLoader;
