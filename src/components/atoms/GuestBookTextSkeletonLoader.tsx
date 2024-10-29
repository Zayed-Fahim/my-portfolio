import React from "react";
import SkeletonLoader from "./SkeletonLoader";

const GuestBookTextSkeletonLoader = () => {
  return (
    <>
      <div className="flex items-start justify-end">
        <div className="flex flex-col gap-1 items-end justify-center">
          <div className="flex items-center gap-2">
            <SkeletonLoader className="rounded-md w-40 h-6" />
          </div>
          <SkeletonLoader className="w-[300px] h-14 rounded-[18px_18px_0px_18px]" />
        </div>
        <SkeletonLoader className="ml-2 rounded-full h-8 w-8 md:h-10 md:w-10" />
      </div>

      <div className="flex items-start justify-start">
        <SkeletonLoader className="ml-2 rounded-full h-8 w-8 md:h-10 md:w-10" />
        <div className="flex flex-col gap-1 items-start justify-center">
          <div className="flex items-center gap-2">
            <SkeletonLoader className="rounded-md w-40 h-6" />
          </div>
          <SkeletonLoader className="w-[300px] h-14 rounded-[18px_18px_18px_0px]" />
        </div>
      </div>
    </>
  );
};

export default GuestBookTextSkeletonLoader;
