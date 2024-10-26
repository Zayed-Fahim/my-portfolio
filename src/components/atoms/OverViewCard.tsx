import React from "react";

const OverViewCard = ({
  children,
  border = false,
}: {
  children: React.ReactNode;
  border?: boolean;
}) => {
  return (
    <div
      className={`${
        !border
          ? "bg-secondary-bg dark:bg-primary-bg w-full p-4 font-incognito rounded-md border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200"
          : "bg-transparent"
      } h-full`}
    >
      {children}
    </div>
  );
};

export default OverViewCard;
