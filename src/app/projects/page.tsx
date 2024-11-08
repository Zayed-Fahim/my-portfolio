import React from "react";
import { ProjectsTemplate } from "@/components/templates";
import { MetaData } from "@/components/molecules";

export const metadata = MetaData({
  title: "Projects | Zayed Fahim",
  description: "Here you can find my projects that I have created on!",
  url: "https://zayedfahim.vercel.app/projects",
  ogImage: "https://i.ibb.co.com/VNxW2jp/project-og.png",
});

const ProjectPage = () => {
  return <ProjectsTemplate />;
};

export default ProjectPage;
