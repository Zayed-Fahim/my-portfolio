import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import "../../App.css";
const Projects = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  return (
    <div
      className="h-auto lg:h-[910px] bg-gradient-to-r from-[#1C1C1C] to-[#2C2C2C] shadow-2xl"
      id="projects"
    >
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
          <div className="bg-black bg-opacity-20" key={project.projectID}>
            <div className="flex flex-col lg:flex-row lg:p-10 lg:justify-between">
              <div>
                <img
                  className="lg:h-[500px] h-[200px] lg:w-[720px]"
                  src={project?.websiteCover}
                  alt="project-1"
                />
              </div>
              <div className="flex flex-col w-[350px] gap-5 justify-center items-center">
                <h1 className="text-[#FFFFFF] font-semibold lg:font-bold text-xl mt-3 lg:mt-0 lg:text-[24px] lg:pb-[25px] text-center">
                  {project.websiteName}
                </h1>
                <p className="px-5 h-[200px] lg:h-[350px] lg:w-[350px] break-words">
                  {project.shortDescription}
                </p>
                <Link
                  to={`/projects/${project?.projectID}/${project?.websiteName}`}
                  className="grid place-items-center place-content-center text-[#E2A100] lg:pt-[25px] mb-5 lg:mb-0"
                  onClick={scrollToTop}
                >
                  <button className="text-[18px] text-center hover:font-bold">
                    View Full Project
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex items-center justify-center pb-14 lg:pb-0 lg:mt-6">
        <Link
          to="/projects"
          className="block text-black font-bold px-5 py-1 rounded-md bg-[#E2A100]"
          onClick={scrollToTop}
        >
          Explore All Projects
        </Link>
      </div>
    </div>
  );
};

export default Projects;
