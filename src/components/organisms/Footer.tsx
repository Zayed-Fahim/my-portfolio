import React from "react";
import { SocialLink } from "@/components/molecules";
import { socialLinks } from "@/data/socialLinks";

const Footer = () => {
  return (
    <div className="bg-pattern bg-pattern-size sm:opacity-80">
      <footer className="max-w-7xl mx-auto md:px-16 px-6 flex justify-between items-center mt-16 pt-5 pb-10">
        <p className="md:text-base text-sm md:font-normal font-light font-incognito">
          Copyright © 2024 Zayed Fahim --{" "}
          <span className="text-[#a1a1aa] italic">Dhaka, Bangladesh</span>
        </p>

        <div className="flex justify-center items-center gap-5">
          {socialLinks.map((link, index) => {
            const newLink = { ...link, tooltip: true };
            return <SocialLink key={index} {...newLink} />;
          })}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
