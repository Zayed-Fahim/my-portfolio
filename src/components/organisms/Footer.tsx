import React from "react";
import { SocialLink } from "../molecules";
import { socialLinks } from "@/data/socialLinks";

const Footer = () => {
  return (
    <section>
      <footer className="flex justify-between items-center max-w-7xl mx-auto md:px-16 px-6 mt-20 mb-10">
        <p className="md:text-base text-sm md:font-normal font-light font-incognito">
          Copyright © 2024 Zayed Fahim.
        </p>

        <div className="flex justify-center items-center gap-5">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
        </div>
      </footer>
    </section>
  );
};

export default Footer;
