"use client";
import { PageHeader, ProjectCardSkeletonLoader } from "@/components/atoms";
import { Animation } from "@/components/molecules";
import { IProjectProps } from "@/types/projects";
import { fetchData } from "@/utils/fetchData";
import { useCallback, useContext, useEffect, useState } from "react";
import { ProjectCard } from "@/components/organisms";
import { CommonContext } from "@/contexts";

const Projects = () => {
  const { isLoading, setIsLoading } = useContext(CommonContext)!;
  const [projectData, setProjectData] = useState<IProjectProps[]>([]);

  const handleData = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await fetchData(
        "https://zayedfahim.vercel.app/api/v2/projects?visible=true",
        "get"
      );

      if (result.success) {
        setProjectData(result.data);
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading]);

  useEffect(() => {
    handleData();
  }, [handleData]);

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
