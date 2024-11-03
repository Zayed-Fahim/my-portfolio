import React from "react";
import { Animation, SocialPlatform } from "@/components/molecules";
import {
  Experience,
  GithubContributions,
  Contact,
} from "@/components/organisms";
import { HeroSection } from "@/components/molecules";

const Home = () => {
  return (
    <>
      <div className="bg-pattern bg-pattern-size lg:mt-32 mt-20 ">
        <div className="max-w-7xl mx-auto md:px-16 px-6 flex lg:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 gap-y-6 mb-16">
          <div className="lg:max-w-2xl max-w-2xl flex flex-col gap-3 w-full lg:w-[55%]">
            <Animation delay={0.1}>
              <h1 className="font-incognito font-semibold tracking-tight text-4xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
                Hi, I&apos;m{" "}
                <span className="text-secondary-color">Sayed Asif Zayed</span>
                <br />
                Full Stack Software Engineer
              </h1>
              <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
                I&apos;m Zayed Fahim, an experienced full-stack software
                engineer passionate about learning and crafting cutting-edge web
                experiences. My technical expertise allows me to transform ideas
                into functional and impactful websites that benefit end users
                and make a positive difference in the world.
              </p>
            </Animation>
            <Animation delay={0.1}>
              <SocialPlatform />
            </Animation>
          </div>

          <Animation className="w-full lg:w-[45%]" delay={0.1}>
            <HeroSection />
          </Animation>
        </div>
      </div>

      <Animation delay={0.15} className="max-w-7xl mx-auto md:px-16 px-6">
        <Experience />
      </Animation>
      <Animation delay={0.18} className="max-w-7xl mx-auto md:px-16 px-6">
        <GithubContributions />
      </Animation>
      <Animation delay={0.2} className="max-w-7xl mx-auto md:px-16 px-6">
        <Contact />
      </Animation>
    </>
  );
};

export default Home;
