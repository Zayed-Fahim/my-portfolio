import React from "react";

const Loading = () => {
  return (
    <div className="h-screen w-full flex gap-4 justify-center items-center">
      <span className="font-bold text-2xl xl:text-4xl text-[#00C4F0]">
        E
      </span>
      <span className="font-bold text-2xl xl:text-4xl text-[#E2A200]">
        N
      </span>
      <span className="font-bold text-2xl xl:text-4xl text-[#00C4F0]">
        T
      </span>
      <span className="font-bold text-2xl xl:text-4xl text-[#E2A200]">
        E
      </span>
      <span className="font-bold text-2xl xl:text-4xl text-[#00C4F0]">
        R
      </span>
      <span className="font-bold text-2xl xl:text-4xl text-[#E2A200]">
        I
      </span>
      <span className="font-bold text-2xl xl:text-4xl text-[#00C4F0]">
        N
      </span>
      <span className="font-bold text-2xl xl:text-4xl text-[#E2A200]">
        G
      </span>
      <div>
        <span className="loading loading-ball loading-xs text-[#00C4F0]"></span>
        <span className="loading loading-ball loading-sm text-[#E2A200]"></span>
        <span className="loading loading-ball loading-md text-[#00C4F0]"></span>
        <span className="loading loading-ball loading-lg text-[#E2A200]"></span>
      </div>
    </div>
  );
};

export default Loading;
