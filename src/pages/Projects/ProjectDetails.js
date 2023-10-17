import React from "react";
import { useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const projectDetails = useLoaderData();
  console.log(projectDetails);
  const { projectID } = projectDetails[0];

  return (
    <div className="h-screen bg-black bg-opacity-70 text-white mt-[63px]">
      <h1 className="font-bold text-2xl text-center">
        This is project details {projectID}
      </h1>
    </div>
  );
};

export default ProjectDetails;
