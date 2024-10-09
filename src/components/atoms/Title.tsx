import React from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, className }) => {
  return <h3 className={`font-bold text-lg ${className}`}>{children}</h3>;
};

export default Title;
