import Link from "next/link";
import React from "react";
import { SocialButton } from "../atoms";
import { ISocialLink } from "@/data/socialLinks";

const SocialLink: React.FC<ISocialLink> = ({ name, url, icon }) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="group relative inline-block"
      aria-label={name}
    >
      <SocialButton
        icon={icon}
        className="social-button dark:bg-[#202023] bg-[#eee]"
      />
      <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold  dark:text-white dark:bg-[#202023] bg-[#eee] dark:border-zinc-800 border-zinc-200 rounded shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100 font-incognito">
        {name}
      </span>
    </Link>
  );
};

export default SocialLink;
