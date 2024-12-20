"use client";
import { PageHeader, SkeletonLoader, ToolTip } from "@/components/atoms";
import { Animation } from "@/components/molecules";
import { SITE } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { IoMdDownload } from "react-icons/io";
import { LuExternalLink } from "react-icons/lu";
import { Biography } from "@/components/organisms";
import { CommonContext } from "@/contexts";

const About = () => {
  const { isLoading, setIsLoading } = useContext(CommonContext)!;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16">
      <div className="flex flex-col items-start gap-16 min-h-screen">
        <Animation delay={0.1} className="w-full">
          <PageHeader title="About" description="A short overview of me." />
        </Animation>
        <div className="flex flex-col md:flex-row flex-nowrap gap-10">
          <Animation
            className="flex justify-center items-center md:block"
            delay={0.14}
          >
            <div className="flex flex-col gap-3 sticky top-12 w-[280px]">
              <div className="relative">
                {isLoading && (
                  <SkeletonLoader className="absolute top-0 left-0 w-[280px] h-[294px] rounded-xl" />
                )}
                <Image
                  src={SITE.author.avatar}
                  alt="zayed-fahim"
                  width={907}
                  height={970}
                  loading="lazy"
                  quality={80}
                  className={`relative rounded-xl aspect-auto md:hover:scale-105 transition-all duration-300 ease-in-out ${
                    isLoading ? "opacity-0" : "opacity-100"
                  }`}
                  onLoad={() => setIsLoading(false)}
                />
              </div>
              <div className="flex justify-center items-center gap-3">
                <Link
                  href={SITE.author.resume}
                  className="w-full flex justify-center items-center font-incognito text-[18px] font-semibold text-[#3f3f46] dark:text-white gap-x-2 rounded py-2 dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200"
                  target="_blank"
                >
                  <p>View Résumé</p>
                  <LuExternalLink />
                </Link>

                <div className="group relative inline-block">
                  <a
                    href="/resume/resume.pdf"
                    className="flex flex-row-reverse justify-center items-center text-[18px] gap-x-2 rounded py-3 px-2.5 dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200"
                    download="Resume_Sayed-Asif-Zayed.pdf"
                  >
                    <IoMdDownload className="text-secondary-color" />
                  </a>
                  <ToolTip name="Download Résumé" />
                </div>
              </div>
              <div className="text-center">
                <h1 className="font-bold text-xl">Sayed Asif Zayed</h1>
                <p className="text-[#a1a1aa] dark:text-[#a6a6a6] font-incognito">
                  Software Engineer
                </p>
              </div>
            </div>
          </Animation>

          <div className="flex-grow">
            <Biography />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
