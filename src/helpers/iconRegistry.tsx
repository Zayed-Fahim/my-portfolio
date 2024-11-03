import React, { SVGProps } from "react";
import {
  ExpressJS,
  JavaScript,
  JWT,
  MongoDB,
  MongooseJS,
  NextJS,
  NodeJS,
  ReactJS,
  TailwindCSS,
  TypeScript,
} from "@/constants";

// Define icon registry with explicit typing
const iconRegistry = {
  ExpressJS,
  JavaScript,
  JWT,
  MongoDB,
  MongooseJS,
  NextJS,
  NodeJS,
  ReactJS,
  TailwindCSS,
  TypeScript,
} as const;

// Type for the icon registry keys
type IconName = keyof typeof iconRegistry;

// Props interface for the DynamicIcon component
interface DynamicIconProps extends Omit<SVGProps<SVGSVGElement>, "ref"> {
  iconName: string;
  className?: string;
  fill?: string;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({
  iconName,
  className,
  fill = "currentColor",
  ...props
}) => {
  // Type guard to check if the iconName exists in our registry
  const isValidIconName = (name: string): name is IconName => {
    return name in iconRegistry;
  };

  if (!isValidIconName(iconName)) {
    console.warn(`Icon "${iconName}" not found in registry`);
    return null;
  }

  const Icon = iconRegistry[iconName];

  return <Icon className={className} fill={fill} {...props} />;
};

export default DynamicIcon;
