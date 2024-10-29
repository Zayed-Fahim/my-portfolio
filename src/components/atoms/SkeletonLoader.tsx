import React from "react";

const SkeletonLoader = ({
  className,
  children,
}: {
  className: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={`bg-gradient-to-r from-[#e5e5e5] via-[#f0f0f0] to-[#e5e5e5] dark:bg-[linear-gradient(120deg,#2a2a2a_30%,#3a3a3a_38%,#3a3a3a_40%,#2a2a2a_48%)] bg-[length:200%_100%] bg-[position:100%_0] animate-skeleton-load ${className}`}
    >
      {children}
    </div>
  );
};

export default SkeletonLoader;
