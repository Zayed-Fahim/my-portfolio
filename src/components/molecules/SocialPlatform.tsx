import React from "react";
import "../../app/styles/socialPlatformButton.css";
import { Button } from "@/components/atoms";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import Link from "next/link";

const SocialPlatform = () => {
  const className =
    "w-[22px] h-[22px] text-[#3f3f46] dark:text-white dark:group-hover:text-white opacity-50 dark:opacity-30 group-hover:opacity-100";
  const titleClassName =
    "text-[#3f3f46] font-semibold text-base dark:text-white dark:group-hover:text-[#3f3f46] flex flex-col";
  const borderClassName = "w-auto h-[1px] bg-[#a1a1aa] group-hover:opacity-0";

  return (
    <div className="flex items-center justify-start gap-5 flex-wrap">
      <Link href="https://github.com/Zayed-Fahim" target="_blank">
        <Button
          title="Github"
          icon={<FaGithub className={`${className}`} />}
          className="button group pr-2 py-1"
          titleClassName={titleClassName}
          borderClassName={borderClassName}
        />
      </Link>
      <Link href="https://www.linkedin.com/in/zayed-fahim/" target="_blank">
        <Button
          title="LinkedIn"
          icon={<FaLinkedin className={`${className}`} />}
          className="button group pr-2 py-1"
          titleClassName={titleClassName}
          borderClassName={borderClassName}
        />
      </Link>
      <Link
        href="https://drive.google.com/file/d/14zOkpbR2bKQ9XQIgBnWrPdCeRlwWUQOJ/view"
        target="_blank"
      >
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
