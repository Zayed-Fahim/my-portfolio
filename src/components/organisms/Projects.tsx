"use client";
import { projectData } from "@/data/projects";
import { PageHeader } from "@/components/atoms";
import React, { useState, useEffect } from "react";
import { Animation } from "@/components/molecules";
import dynamic from "next/dynamic";

const ProjectCardSkeletonLoader = dynamic(
  () => import("../atoms/ProjectCardSkeletonLoader")
);
const ProjectCard = dynamic(() => import("../organisms/ProjectCard"));

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-16">
      <div className="flex flex-col gap-28">
        <Animation delay={0.06}>
          <PageHeader
            title="Projects"
            description="A collection of finest project that I have built."
          />
        </Animation>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-x-14 sm:gap-x-6 gap-y-24 transition-all duration-1000 ease-in-out">
          {isLoading
            ? Array(5)
                .fill(0)
                .map((_, i) => (
                  <Animation delay={0.06} key={i}>
                    <ProjectCardSkeletonLoader />
                  </Animation>
                ))
            : projectData.map((project, i) => (
                <Animation delay={0.06} key={i}>
                  <ProjectCard {...project} />
                </Animation>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
