import React from "react";

const ProjectLoader = () => {
  return (
    <div className="h-screen w-full flex lg:flex-row flex-col gap-4 justify-center items-center">
      <div className="flex gap-2">
        <div className="flex gap-[2px]">
          <span className="font-bold text-2xl xl:text-4xl text-[#00C4F0]">
            P
          </span>
          <span className="font-bold text-2xl xl:text-4xl text-[#E2A200]">
            r
          </span>
          <span className="font-bold text-2xl xl:text-4xl text-[#00C4F0]">
            o
          </span>
          <span className="font-bold text-2xl xl:text-4xl text-[#E2A200]">
            j
          </span>
          <span className="font-bold text-2xl xl:text-4xl text-[#00C4F0]">
            e
          </span>
          <span className="font-bold text-2xl xl:text-4xl text-[#E2A200]">
            c
          </span>
          <span className="font-bold text-2xl xl:text-4xl text-[#00C4F0]">
            t
          </span>
        </div>
        <div className="flex gap-[2px]">
          <span className="font-bold text-2xl xl:text-4xl text-[#E2A200]">
            C
          </span>
          <span className="font-bold text-2xl xl:text-4xl text-[#00C4F0]">
            o
          </span>
          <span className="font-bold text-2xl xl:text-4xl text-[#E2A200]">
            o
          </span>
          <span className="font-bold text-2xl xl:text-4xl text-[#00C4F0]">
            k
          </span>
          <span className="font-bold text-2xl xl:text-4xl text-[#E2A200]">
            i
          </span>
          <span className="font-bold text-2xl xl:text-4xl text-[#00C4F0]">
            n
          </span>
          <span className="font-bold text-2xl xl:text-4xl text-[#E2A200]">
            g
          </span>
        </div>
      </div>
      <div className="flex gap-3 flex-col lg:flex-row justify-center items-center">
        <span className="loading loading-bars loading-xs text-[#00C4F0]"></span>
        <span className="loading loading-bars loading-sm text-[#E2A200]"></span>
        <span className="loading loading-bars loading-md text-[#00C4F0]"></span>
        <span className="loading loading-bars loading-lg text-[#E2A200] lg:block hidden"></span>
      </div>
    </div>
  );
};

export default ProjectLoader;
