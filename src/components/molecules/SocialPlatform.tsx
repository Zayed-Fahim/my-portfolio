import "@/app/styles/socialPlatformButton.css";
import React from "react";
import { Button } from "@/components/atoms";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import Link from "next/link";
import { SITE } from "@/constants";

const SocialPlatform = () => {
  const className =
    "w-[22px] h-[22px] text-[#3f3f46] dark:text-white dark:group-hover:text-white opacity-50 dark:opacity-30 group-hover:opacity-100";
  const titleClassName =
    "text-[#3f3f46] font-semibold text-base dark:text-white dark:group-hover:text-[#3f3f46] flex flex-col";
  const borderClassName = "w-auto h-[1px] bg-[#a1a1aa] group-hover:opacity-0";

  return (
    <div className="flex items-center justify-start gap-5 flex-wrap">
      <Link href={SITE.author.github.url} target="_blank">
        <Button
          title="Github"
          icon={<FaGithub className={`${className}`} />}
          className="button group pr-2 py-1"
          titleClassName={titleClassName}
          borderClassName={borderClassName}
        />
      </Link>
      <Link href={SITE.author.linkedIn} target="_blank">
        <Button
          title="LinkedIn"
          icon={<FaLinkedin className={`${className}`} />}
          className="button group pr-2 py-1"
          titleClassName={titleClassName}
          borderClassName={borderClassName}
        />
      </Link>
      <Link href={SITE.author.resume} target="_blank">
        <Button
          title="Resume"
          icon={<LuExternalLink className={`${className}`} />}
          className="button group pr-2 py-1"
          titleClassName={titleClassName}
          borderClassName={borderClassName}
        />
      </Link>
    </div>
  );
};

export default SocialPlatform;
