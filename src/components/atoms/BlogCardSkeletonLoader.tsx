import React from "react";
import SkeletonLoader from "./SkeletonLoader";

const BlogCardSkeletonLoader = () => {
  const skeletonClass =
    "relative bg-gradient-to-r from-[#e5e5e5] via-[#f0f0f0] to-[#e5e5e5] dark:bg-[linear-gradient(120deg,#2a2a2a_30%,#3a3a3a_38%,#3a3a3a_40%,#2a2a2a_48%)] bg-[length:200%_100%] bg-[position:100%_0] animate-skeleton-load";

  return (
    // <section className="relative max-w-full lg:gap-y-8 gap-y-12 rounded-xl flex flex-col">
    <div
      className="flex lg:flex-row flex-col lg:items-center items-start gap-8 p-3 rounded-lg 
      dark:bg-primary-bg bg-secondary-bg"
    >
      {/* image section */}
      <div
        className={`relative rounded-md w-full lg:w-[450px] h-64 ${skeletonClass}`}
      >
        <div className={`object-cover`} />
      </div>
      {/* body section */}
      <div className="relative flex-grow w-full lg:max-w-[550px] xl:max-w-[650px] pr-4">
        <SkeletonLoader
          className={`h-7 md:h-8 mb-4 w-full rounded-md ${skeletonClass}`}
        />
        <SkeletonLoader
          className={`h-4 rounded-md w-full mb-2 ${skeletonClass}`}
        />
        <SkeletonLoader
          className={`h-4 rounded-md w-4/6 mb-3 ${skeletonClass}`}
        />
        <div className="flex justify-between items-center min-w-full ">
          <div className="flex gap-x-4">
            <SkeletonLoader
              className={`h-4 rounded-md w-24 ${skeletonClass}`}
            />
            <SkeletonLoader
              className={`h-4 rounded-md w-24 ${skeletonClass}`}
            />
          </div>
          <SkeletonLoader className={`h-4 rounded-md w-16 v${skeletonClass}`} />
        </div>
      </div>
    </div>
    //  </section>
  );
};

export default BlogCardSkeletonLoader;
