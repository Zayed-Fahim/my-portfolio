import { socialLinks } from "@/data/socialLinks";
import React from "react";
import { SocialLink } from "../molecules";
import Link from "next/link";

const Connect = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-4xl font-incognito font-bold">Let&apos;s Connect</h1>
      <div className="flex flex-col gap-5 text-[#52525b] dark:text-[#a1a1aa] text-[17px]">
        <p>
          Questions or collaborations? Reach out to me at{" "}
          <span className="text-secondary-color hover:underline">
            <Link href="/#contact">here</Link>
          </span>{" "}
          or connect through social media. Let&apos;s build something amazing
          together!
        </p>
        <div className="flex gap-3">
          {socialLinks.map((socialLink, i) => (
            <SocialLink key={i} {...socialLink} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Connect;
