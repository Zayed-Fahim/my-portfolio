import Image from "next/image";
import React from "react";

interface IconProps {
  src: string;
  alt: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ src, alt, className }) => {
  return (
    <Image
      height={50}
      width={50}
      src={src}
      alt={alt}
      className={`w-6 h-6 ${className}`}
    />
  );
};

export default Icon;
