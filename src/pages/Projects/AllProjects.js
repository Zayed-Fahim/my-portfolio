import React, { useState, useEffect } from "react";
import "../CSS/projectCard.css";
import { Link } from "react-router-dom";

const AllProjects = () => {
  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://zayed-fahim-portfolio.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data.payload));
  }, [setProjects]);

  return (
    <div className="bg-[#18191A] pt-20 pb-10 flex flex-col gap-4 lg:px-auto px-5">
      <div className="container mx-auto rounded-xl drop-shadow-lg bg-[#242526]">
        <h1 className="text-white py-5 text-center text-3xl lg:text-5xl font-extrabold italic bg-gradient-to-r from-[#00C4F0] via-[#E1A100] to-[#FFFF00] text-transparent bg-clip-text">
          Explore All of My Projects_
        </h1>
      </div>
      <div className="container mx-auto h-auto grid lg:grid-cols-3 gap-5 grid-cols-1 pt-5 pb-3 lg:pt-10 lg:pb-10 lg:px-10 bg-[#242526] rounded-xl">
        {projects?.map((project) => (
          <div className="" key={project?.projectID}>
            <div className="flip-box">
              <div
                className="front rounded-xl"
                style={{
                  background: `linear-gradient(to right, ${project?.websitePrimaryColor[0].colorCode} 30%, ${project?.websitePrimaryColor[1].colorCode} 70%)`,
                }}
              >
                <div className="content text-center p-7">
                  <img
                    className="rounded-xl lg:h-[270px] drop-shadow-2xl"
                    src={project?.websiteCover}
                    alt={project?.websiteName}
                  />
                </div>
              </div>
              <div
                className="back rounded-xl"
                style={{
                  background: `linear-gradient(to right, ${project?.websitePrimaryColor[1].colorCode} 30%, ${project?.websitePrimaryColor[0].colorCode} 70%)`,
                }}
              >
                <div className="content">
                  <Link
                    to={`/projects/${project?.projectID}/${project?.websiteName}`}
                    className="px-3 py-1 rounded-md text-white font-bold italic"
                    style={{
                      background: `linear-gradient(to right, ${project?.websitePrimaryColor[0].colorCode} 30%, ${project?.websitePrimaryColor[1].colorCode} 70%)`,
                    }}
                  >
                    See Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
