import React from "react";
import { ProjectsTemplate } from "@/components/templates";
import { MetaData } from "@/components/molecules";

export const metadata = MetaData({
  title: "Projects | Zayed Fahim",
  description: "Here you can find my projects that I have created on!",
  url: "https://zayed-fahim.web.app/projects",
  ogImage: "https://zayed-fahim.web.app/og-image.jpg",
});

const ProjectPage = () => {
  return <ProjectsTemplate />;
};

export default ProjectPage;
