import { Facebook, GitHub, LinkedIn } from "@/constants";

export interface ISocialLink {
  name: string;
  url: string;
  icon: JSX.Element;
}

export const socialLinks: ISocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/zayed-fahim",
    icon: <LinkedIn className="w-6 h-6 text-gray-800 dark:text-white" />,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/Zayed.Fahim33",
    icon: <Facebook className="w-6 h-6 text-gray-800 dark:text-white" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/Zayed-Fahim",
    icon: <GitHub className="w-6 h-6 text-gray-800 dark:text-white" />,
  },
];
