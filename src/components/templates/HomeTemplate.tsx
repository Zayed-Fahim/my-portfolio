import { Animation, SocialPlatform } from "@/components/molecules";
import { HeroSvg } from "@/constants";
import "../../app/styles/gradientBorder.css";
import dynamic from "next/dynamic";
import { Contact } from "@/components/organisms";

const Experience = dynamic(() => import("@/components/organisms/Experience"));
const GithubContributionsGraph = dynamic(
  () => import("@/components/organisms/GithubContributionsGraph")
);

const HomeTemplate = () => {
  return (
    <section
      className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20"
      id="home"
    >
      <div className="flex lg:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 gap-y-6 mb-16">
        <div className="lg:max-w-2xl max-w-2xl flex flex-col gap-3">
          <Animation delay={0.1}>
            <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
              Software engineer, <br /> Full Stack Web Developer
            </h1>
            <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
              I&apos;m Zayed Fahim, an experienced frontend developer passionate
              about learning and building open-source software that is
              beneficial to developers and the world at large.
            </p>
          </Animation>
          <Animation delay={0.1}>
            <SocialPlatform />
          </Animation>
        </div>

        <Animation className="w-full" delay={0.1}>
          <div>
            <HeroSvg />
          </div>
        </Animation>
      </div>
      <Animation delay={0.15}>
        <Experience />
      </Animation>
      <Animation delay={0.18}>
        <GithubContributionsGraph />
      </Animation>
      <Animation delay={0.2}>
        <Contact />
      </Animation>
    </section>
  );
};

export default HomeTemplate;
