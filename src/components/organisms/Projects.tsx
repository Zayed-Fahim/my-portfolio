import { ProjectCard } from "@/components/organisms";
import { projectData } from "@/data/projects";
import { PageHeader } from "../atoms";
import dynamic from "next/dynamic";
import React, { memo } from "react";

// Dynamically load Animation component
const Animation = dynamic(() => import("../molecules/Animation"), {
  ssr: false,
});

const Projects = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-16">
      <div className="flex flex-col gap-28">
        <Animation delay={0.06}>
          <PageHeader
            title="Projects"
            description="A collection of finest project that I have built."
          />
        </Animation>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-24">
          {projectData.map((project, i) => (
            <Animation delay={0.06} key={i}>
              <ProjectCard {...project} />
            </Animation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Projects);
