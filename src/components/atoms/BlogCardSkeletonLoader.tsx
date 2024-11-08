import React from "react";
import { SkeletonLoader } from "@/components/atoms";

const BlogCardSkeletonLoader = () => {
  return (
    <div
      className="flex lg:flex-row flex-col lg:items-center items-start gap-8 p-3 rounded-lg 
      dark:bg-primary-bg bg-[#f7f7f7]"
    >
      <SkeletonLoader className="relative rounded-md w-full lg:w-[450px] h-64">
        <div className={`object-cover`} />
      </SkeletonLoader>

      <div className="relative flex-grow w-full lg:max-w-[550px] xl:max-w-[650px] pr-4">
        <SkeletonLoader className="relative h-7 md:h-8 mb-4 w-full rounded-md" />
        <SkeletonLoader className="h-4 rounded-md w-full mb-2" />
        <SkeletonLoader className="h-4 rounded-md w-4/6 mb-3" />
        <div className="flex justify-between items-center min-w-full ">
          <div className="flex gap-x-4">
            <SkeletonLoader className="h-4 rounded-md w-24" />
            <SkeletonLoader className="h-4 rounded-md w-24" />
          </div>
          <SkeletonLoader className="h-4 rounded-md w-16" />
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeletonLoader;
