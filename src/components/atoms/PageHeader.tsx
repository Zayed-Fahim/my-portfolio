import React from "react";

interface IPageHeaderProps {
  title: string;
  description: string;
  className?: string;
}

const PageHeader: React.FC<IPageHeaderProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div
      className={`${className} flex flex-col items-start gap-5 font-incognito`}
    >
      <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold leading-4">
        {title}
      </h1>
      <p className="text-[1.125rem] leading-7">{description}</p>
    </div>
  );
};

export default PageHeader;
