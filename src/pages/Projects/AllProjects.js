import React, { useState, useEffect } from "react";
import "../CSS/projectCard.css";
import FetchingLoader from "../Components/FetchingLoader";
import ClickHere from "../Components/ClickHere";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setIsFetching(true);
    fetch("https://zayed-fahim-portfolio.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setIsFetching(false);
        }, 1500);
        setProjects(data.payload);
      });
  }, [setProjects]);

  return isFetching ? (
    <FetchingLoader />
  ) : (
    <div className="bg-[#18191A] pt-20 pb-10 flex flex-col gap-4 lg:px-auto px-5">
      <div className="container mx-auto rounded-xl drop-shadow-lg bg-[#242526]">
        <h1 className="text-white py-5 text-center text-3xl lg:text-5xl font-extrabold italic bg-gradient-to-r from-[#00C4F0] via-[#E1A100] to-[#FFFF00] text-transparent bg-clip-text">
          Explore All of My Projects_
        </h1>
      </div>
      <div className="container mx-auto h-auto grid lg:grid-cols-3 gap-5 lg:gap-10 xl:gap-10 grid-cols-1 pt-5 pb-6 lg:pt-10 lg:pb-10 lg:px-10 bg-[#242526] rounded-xl">
        {projects?.map((project) => (
          <div
            className="flip w-[85%] h-[250px] mx-7 xl:mx-auto lg:mx-auto  lg:w-[100%] lg:h-[340px] xl:w-[100%] xl:h-[340px]"
            key={project?.projectID}
          >
            <div className="flip-content">
              <div
                className="flip-front "
                style={{
                  border: `6px solid ${project?.websitePrimaryColor[0].colorCode}`,
                  boxShadow: `6px 6px ${project?.websitePrimaryColor[1].colorCode};`,
                  backgroundColor: `${project?.websitePrimaryColor[0].colorCode}`,
                }}
              >
                <img
                  src={project?.websiteCover}
                  className="xl:h-[328px] lg:h-[328px] h-[238px]"
                  alt=""
                />
              </div>
              <div
                className="flip-back"
                style={{
                  backgroundColor: `${project?.websitePrimaryColor[0].colorCode}`,
                  border: `6px solid ${project?.websitePrimaryColor[0].colorCode}`,
                  boxShadow: `6px 6px ${project?.websitePrimaryColor[1].colorCode}`,
                }}
              >
                <ClickHere name={"Click Here"} project={project} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
