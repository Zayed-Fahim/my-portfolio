import React from "react";
import { SkeletonLoader } from "@/components/atoms";

const skeletonClass =
  "relative bg-gradient-to-r from-[#e5e5e5] via-[#f0f0f0] to-[#e5e5e5] dark:bg-[linear-gradient(120deg,#2a2a2a_30%,#3a3a3a_38%,#3a3a3a_40%,#2a2a2a_48%)] bg-[length:200%_100%] bg-[position:100%_0] animate-skeleton-load";

const ProjectCardSkeletonLoader = () => {
  return (
    <div className="dark:bg-primary-bg bg-secondary-bg border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 relative rounded-xl flex flex-col sm:max-h-[500px] max-h-[485px]">
      {/* image section */}
      <div className="relative">
        <SkeletonLoader
          className={`${skeletonClass} rounded-tl-xl rounded-tr-xl w-full h-[250px] md:h-[285px] lg:h-[301px]`}
        />
      </div>

      {/* website and github link section */}
      <div className="p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <SkeletonLoader className={`${skeletonClass} w-2/4 h-5 rounded-md`} />
          <div className="flex items-center gap-2">
            <SkeletonLoader
              className={`${skeletonClass} w-5 h-5 rounded-full`}
            />
            <SkeletonLoader
              className={`${skeletonClass} w-5 h-5 rounded-full`}
            />
          </div>
        </div>

        <SkeletonLoader className={`${skeletonClass} w-full h-6 rounded-md`} />

        <div className="flex items-center gap-3 mt-2">
          {[...Array(5)].map((_, index) => (
            <SkeletonLoader
              key={index}
              className={`${skeletonClass} w-6 h-6 rounded-md`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeletonLoader;
