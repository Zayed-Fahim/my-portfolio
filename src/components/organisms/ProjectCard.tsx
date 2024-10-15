"use client";
import "@/app/styles/projectCard.css";
import Image from "next/image";
import Link from "next/link";
import React, { memo, useState } from "react";
import { FaGithub } from "react-icons/fa";
import {
  SkeletonLoader,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../atoms";
import { Animation } from "../molecules";

interface IProjectCardProps {
  styles: IStylesProps;
  title: string;
  shortDescription: string;
  technologies: ITechnologyProps[];
  image: string;
  liveSite: string;
  serverRepo: string;
  clientRepo: string;
}

interface ITechnologyProps {
  name: string;
  icon: JSX.Element;
}

interface IStylesProps {
  backgroundImage: string;
  brandColor: string;
}

const ProjectCard: React.FC<IProjectCardProps> = memo(
  ({
    styles,
    title,
    shortDescription,
    technologies,
    image,
    liveSite,
    serverRepo,
    clientRepo,
  }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    return (
      <div
        className="project-card dark:bg-primary-bg bg-secondary-bg border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 relative rounded-xl flex flex-col max-h-[485px]"
        style={
          {
            "--bg-image": `url(${styles.backgroundImage})`,
          } as React.CSSProperties
        }
      >
        <Animation delay={0.1}>
          <div className="relative">
            {isLoading && (
              <SkeletonLoader className="relative h-full w-full bg-gradient-to-r from-[#e5e5e5] via-[#f0f0f0] to-[#e5e5e5] dark:bg-[linear-gradient(120deg,#2a2a2a_30%,#3a3a3a_38%,#3a3a3a_40%,#2a2a2a_48%)] rounded-tl-xl rounded-tr-xl bg-[length:200%_100%] bg-[position:100%_0] animate-skeleton-load" />
            )}
            <Image
              src={image}
              alt={title}
              width={1280}
              height={706}
              loading="lazy"
              quality={90}
              className={`rounded-tl-xl rounded-tr-xl object-cover transition-all duration-300 ease-in-out ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </Animation>

        <div className="p-4 flex flex-col gap-4">
          <Animation delay={0.14}>
            <div className="flex items-center justify-between">
              <Link
                rel="noopener"
                target="_blank"
                href={liveSite}
                className={`project-card__link font-incognito`}
                style={{ color: `${styles.brandColor}` }}
              >
                {title}
              </Link>
              <div className="flex items-center gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div>
                        <Link href={serverRepo} rel="noopener" target="_blank">
                          <FaGithub className="w-5 h-5 text-[#a1a1aa] hover:text-black hover:dark:text-white" />
                        </Link>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>Server Side Code</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div>
                        <Link href={clientRepo} rel="noopener" target="_blank">
                          <FaGithub className="w-5 h-5 text-[#a1a1aa] hover:text-black hover:dark:text-white" />
                        </Link>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>Client Side Code</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </Animation>

          <Animation delay={0.18}>
            <p className="font-incognito text-lg break-words text-[#a1a1aa]">
              {shortDescription}
            </p>
          </Animation>

          <Animation delay={0.22}>
            <div className="flex items-center gap-3 mt-2">
              {technologies.map(({ name, icon }) => (
                <TooltipProvider key={name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="cursor-pointer">{icon}</div>
                    </TooltipTrigger>
                    <TooltipContent>{name}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </Animation>
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
