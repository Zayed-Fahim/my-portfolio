import {
  PageHeader,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/atoms";
import { Biography } from "@/components/organisms";
import { SITE } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { IoMdDownload } from "react-icons/io";
import { LuExternalLink } from "react-icons/lu";
import { Animation } from "../molecules";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-16">
      <div className="flex flex-col items-start gap-16 min-h-screen">
        <Animation delay={0.1}>
          <PageHeader title="About" description="A short overview of me." />
        </Animation>
        <div className="flex flex-nowrap gap-10">
          <Animation delay={0.14}>
            <div className="flex flex-col gap-3 sticky top-12 w-[280px]">
              <Image
                src="/zayed/2.png"
                alt="zayed-fahim"
                width={280}
                height={280}
                loading="lazy"
                quality={80}
                className="rounded-xl aspect-auto hover:scale-105 transition-all duration-300 ease-in-out"
              />
              <div className="flex justify-center items-center gap-3">
                <Link
                  href={SITE.author.resume}
                  className="w-full flex justify-center items-center font-incognito text-[18px] font-semibold text-[#3f3f46] dark:text-white gap-x-2 rounded py-2 dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200"
                  target="_blank"
                >
                  <p>View Résumé</p>
                  <LuExternalLink />
                </Link>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="./resume/resume.pdf"
                        className="flex flex-row-reverse justify-center items-center text-[18px] gap-x-2 rounded py-3 px-2.5 dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200"
                        download="Resume_Sayed-Asif-Zayed.pdf"
                      >
                        <IoMdDownload className="text-secondary-color" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>Download Résumé</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
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
