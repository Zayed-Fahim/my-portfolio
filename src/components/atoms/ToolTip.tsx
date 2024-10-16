import React from "react";

interface IToolTipProps {
  name: string;
  className?: string;
}

const ToolTip: React.FC<IToolTipProps> = ({ name, className }) => {
  return (
    <div
      className={`z-[9999] absolute -top-12 left-1/2 transform -translate-x-1/2 px-4 py-2 text-sm font-bold  dark:bg-[#202023] bg-[#eee] dark:border-zinc-800 border-zinc-200 rounded shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100 font-incognito whitespace-nowrap w-auto ${className}`}
    >
      {name}
    </div>
  );
};

export default ToolTip;
