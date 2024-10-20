import React from "react";
import SkeletonLoader from "./SkeletonLoader";

const BlogCardSkeletonLoader = () => {
  const skeletonClass =
    "relative bg-gradient-to-r from-[#e5e5e5] via-[#f0f0f0] to-[#e5e5e5] dark:bg-[linear-gradient(120deg,#2a2a2a_30%,#3a3a3a_38%,#3a3a3a_40%,#2a2a2a_48%)] bg-[length:200%_100%] bg-[position:100%_0] animate-skeleton-load";

  return (
    <section className="max-w-full lg:gap-y-8 gap-y-12 dark:bg-primary-bg bg-secondary-bg border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 relative rounded-xl flex flex-col">
      <div
        className="flex lg:flex-row flex-col lg:items-center items-start gap-8 p-3 rounded-lg border
      dark:bg-primary-bg bg-secondary-bg dark:border-zinc-800 border-zinc-200"
      >
        <div
          className={`relative w-full lg:w-[450px] h-64 aspect-w-16 aspect-h-9 overflow-hidden rounded-md ${skeletonClass}`}
        >
          <div className={`absolute inset-0`} />
        </div>
        <div className="flex-grow max-w-full lg:max-w-[550px] xl:max-w-[650px] pr-4">
          <SkeletonLoader className={`h-8 mb-4 ${skeletonClass}`} />
          <SkeletonLoader
            className={`h-4 rounded w-full mb-2 ${skeletonClass}`}
          />
          <SkeletonLoader
            className={`h-4 rounded w-5/6 mb-3 ${skeletonClass}`}
          />
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-x-4">
              <SkeletonLoader className={`h-4 rounded w-24 ${skeletonClass}`} />
              <SkeletonLoader className={`h-4 rounded w-24 ${skeletonClass}`} />
            </div>
            <SkeletonLoader className={`h-4 rounded w-16 v${skeletonClass}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCardSkeletonLoader;
