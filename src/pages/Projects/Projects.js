import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Typewriter } from "react-simple-typewriter";
import "../CSS/project.css";
import ExploreProjectButton from "../Components/ExploreProjectButton";
import ProjectDetailsButton from "../Components/ProjectDetailsButton";

const Projects = () => {
  const settings = {
    dots: true,
    arrows: false,
    pauseOnHover: true,
    infinite: true,
    initialSlide: 0,
    slidesToShow: 1,
    swipeToSlide: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    appendDots: (dots) => (
      <div style={{ position: "relative" }}>
        <ul className="pb-5 lg:pb-auto"> {dots} </ul>
      </div>
    ),
  };
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://zayed-fahim-portfolio.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data.payload));
  }, [setProjects]);
  console.log(projects);
  return (
    <div className="h-auto lg:h-[938px] bg-gradient-to-r from-[#1C1C1C] to-[#2C2C2C] shadow-2xl">
      <h1 className="text-[#E4E4E4] text-[38px] lg:text-5xl font-bold text-center pt-10 pb-5 lg:p-10">
        <span className="text-[#00C4F0] font-bold">
          <Typewriter
            words={["PROJECTS"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={400}
            deleteSpeed={80}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <Slider
        {...settings}
        className="container mx-auto text-white pt-5 pb-5 px-5 lg:px-44"
      >
        {/* 1 */}
        {projects?.map((project) => (
          <div className="bg-[#242526] lg:h-[600px]" key={project?.projectID}>
            <div className="flex flex-col lg:flex-row lg:p-10 lg:pt-12 lg:items-center lg:justify-between">
              <div>
                <img
                  className="lg:h-[500px] h-[200px] lg:w-[720px]"
                  src={project?.websiteCover}
                  alt="project-1"
                />
              </div>
              <div className="flex flex-col w-full pb-5 lg:pb-0 lg:w-[350px] gap-5 justify-center items-center">
                <h1 className="text-[#FFFFFF] font-semibold lg:font-bold text-xl mt-3 lg:mt-0 lg:text-[24px] lg:pb-[25px] text-center">
                  {project.websiteName}
                </h1>
                <p className="px-5 h-[200px] lg:h-[350px] lg:w-[350px] break-words">
                  {project.shortDescription}
                </p>
                <ProjectDetailsButton project={project} name={"Full Project"} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <ExploreProjectButton name={"Explore All Projects"} />
    </div>
  );
};

export default Projects;
