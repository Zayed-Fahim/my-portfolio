import React from "react";
import { SkeletonLoader } from "@/components/atoms";

const ProjectCardSkeletonLoader = () => {
  return (
    <div className="dark:bg-primary-bg bg-[#f7f7f7] relative rounded-xl flex flex-col sm:max-h-[500px] max-h-[485px]">
      <div className="relative">
        <SkeletonLoader className="rounded-tl-xl rounded-tr-xl w-full h-[250px] md:h-[285px] lg:h-[301px]" />
      </div>

      <div className="p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <SkeletonLoader className="w-2/4 h-5 rounded-md" />
          <div className="flex items-center gap-2">
            <SkeletonLoader className="w-5 h-5 rounded-full" />
            <SkeletonLoader className="w-5 h-5 rounded-full" />
          </div>
        </div>

        <SkeletonLoader className="w-full h-6 rounded-md" />

        <div className="flex items-center gap-3 mt-2">
          {[...Array(5)].map((_, index) => (
            <SkeletonLoader key={index} className="w-6 h-6 rounded-md" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeletonLoader;
