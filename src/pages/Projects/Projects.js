import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Typewriter } from 'react-simple-typewriter';
import project1 from '../../assets/projects/assignment-12.PNG';
import project2 from '../../assets/projects/assignment-11.PNG';
import project3 from '../../assets/projects/assignment-10.PNG';
import project4 from '../../assets/projects/assignment-9.PNG';
import project5 from '../../assets/projects/assignment-8.PNG';
import project6 from '../../assets/projects/assignment-7.PNG';
import project7 from '../../assets/projects/assignment-6.PNG';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    initialSlide: 0,
    slidesToShow: 1,
    swipeToSlide: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    appendDots: (dots) => (
      <div style={{ position: "relative" }}>
        <ul className="pb-5 lg:pb-auto"> {dots} </ul>
      </div>
    ),
  };
    return (
      <div
        className="h-auto lg:h-[900px] bg-gradient-to-r from-[#414141] to-[#2D2D2D]"
        id="projects"
      >
        <h1 className="text-[#E4E4E4] text-[38px] lg:text-5xl font-bold text-center pt-10 lg:p-16">
          <span className="text-[#00C4F0] font-bold">
            <Typewriter
              words={["PROJECTS"]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
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
          <div className="w-auto lg:w-[970px] h-[550px] lg:h-auto glass">
            <div className="flex flex-col lg:flex-row lg:p-10 lg:justify-between">
              <div>
                <img
                  className="lg:h-[500px] lg:w-[690px]"
                  src={project1}
                  alt="project-1"
                />
              </div>
              <div className="flex items-center flex-col w-[350px]">
                <h1 className="text-[#FFFFFF] font-semibold text-[24px] pb-4 lg:pb-[25px]">
                  phones.com
                </h1>
                <p className="p-5 h-[200px] lg:h-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ut orci eu elit consequat posuere ut sed elit. Nulla et
                  tristique felis. Morbi quis orci non purus blandit fringilla.
                  Etiam et mollis eros. Duis venenatis vulputate lacus, non
                  tristique eros placerat vel.{" "}
                  <span className="lg:visible invisible">
                    Nam nec magna lacus. Etiam euismod egestas mauris nec
                    mollis. Phasellus efficitur et ex vel condimentum. Cras enim
                    purus, tempor sed massa vel, accumsan bibendum magna. Nullam
                    hendrerit cursus purus, sit amet viverra arcu gravida vel.
                  </span>
                  <span className="text-red-600 lg:invisible visible relative top-[-143px] left-2">
                    ..<Link to="">Continue Reading</Link>
                  </span>
                </p>
                <Link className="grid place-items-center place-content-center grid-cols-2 text-[#E2A100] lg:pt-[25px]">
                  <button className="text-[18px]">More</button>
                  <FaLongArrowAltRight size={23} className=""></FaLongArrowAltRight>
                </Link>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="w-auto lg:w-[970px] h-[550px] lg:h-auto glass">
            <div className="flex flex-col lg:flex-row lg:p-10 lg:justify-between">
              <div>
                <img
                  className="lg:h-[500px] lg:w-[690px] h-[222px]"
                  src={project2}
                  alt="project-2"
                />
              </div>
              <div className="flex items-center flex-col w-[350px]">
                <h1 className="text-[#FFFFFF] font-semibold text-[24px] pb-4  lg:pb-[25px]">
                  DELIVERY dot com
                </h1>
                <p className="p-5 h-[200px] lg:h-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ut orci eu elit consequat posuere ut sed elit. Nulla et
                  tristique felis. Morbi quis orci non purus blandit fringilla.
                  Etiam et mollis eros. Duis venenatis vulputate lacus, non
                  tristique eros placerat vel.{" "}
                  <span className="lg:visible invisible">
                    Nam nec magna lacus. Etiam euismod egestas mauris nec
                    mollis. Phasellus efficitur et ex vel condimentum. Cras enim
                    purus, tempor sed massa vel, accumsan bibendum magna. Nullam
                    hendrerit cursus purus, sit amet viverra arcu gravida vel.
                  </span>
                  <span className="text-red-600 lg:invisible visible relative top-[-143px] left-2">
                    ..<Link to="">Continue Reading</Link>
                  </span>
                </p>
                <Link className="grid place-items-center place-content-center grid-cols-2 text-[#E2A100] lg:pt-[25px]">
                  <button className="text-[18px]">More</button>
                  <FaLongArrowAltRight size={23} className=""></FaLongArrowAltRight>
                </Link>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="w-auto lg:w-[970px] h-[550px] lg:h-auto glass">
            <div className="flex flex-col lg:flex-row lg:p-10 lg:justify-between">
              <div>
                <img
                  className="lg:h-[500px] lg:w-[690px] h-[222px]"
                  src={project3}
                  alt="project-3"
                />
              </div>
              <div className="flex items-center flex-col w-[350px]">
                <h1 className="text-[#FFFFFF] font-semibold text-[24px]  pb-[25px]">
                  Active Learning
                </h1>
                <p className="p-5 h-[200px] lg:h-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ut orci eu elit consequat posuere ut sed elit. Nulla et
                  tristique felis. Morbi quis orci non purus blandit fringilla.
                  Etiam et mollis eros. Duis venenatis vulputate lacus, non
                  tristique eros placerat vel.{" "}
                  <span className="lg:visible invisible">
                    Nam nec magna lacus. Etiam euismod egestas mauris nec
                    mollis. Phasellus efficitur et ex vel condimentum. Cras enim
                    purus, tempor sed massa vel, accumsan bibendum magna. Nullam
                    hendrerit cursus purus, sit amet viverra arcu gravida vel.
                  </span>
                  <span className="text-red-600 lg:invisible visible relative top-[-143px] left-2">
                    ..<Link to="">Continue Reading</Link>
                  </span>
                </p>
                <Link className="grid place-items-center place-content-center grid-cols-2 text-[#E2A100] lg:pt-[25px]">
                  <button className="text-[18px]">More</button>
                  <FaLongArrowAltRight size={23} className=""></FaLongArrowAltRight>
                </Link>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="w-auto lg:w-[970px] h-[550px] lg:h-auto glass">
            <div className="flex flex-col lg:flex-row lg:p-10 lg:justify-between">
              <div>
                <img
                  className="lg:h-[500px] lg:w-[690px] h-[222px]"
                  src={project4}
                  alt="project-4"
                />
              </div>
              <div className="flex items-center flex-col w-[350px]">
                <h1 className="text-[#FFFFFF] font-semibold text-[24px]  pb-[25px]">
                  Quiz 2 Go
                </h1>
                <p className="p-5 h-[200px] lg:h-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ut orci eu elit consequat posuere ut sed elit. Nulla et
                  tristique felis. Morbi quis orci non purus blandit fringilla.
                  Etiam et mollis eros. Duis venenatis vulputate lacus, non
                  tristique eros placerat vel.{" "}
                  <span className="lg:visible invisible">
                    Nam nec magna lacus. Etiam euismod egestas mauris nec
                    mollis. Phasellus efficitur et ex vel condimentum. Cras enim
                    purus, tempor sed massa vel, accumsan bibendum magna. Nullam
                    hendrerit cursus purus, sit amet viverra arcu gravida vel.
                  </span>
                  <span className="text-red-600 lg:invisible visible relative top-[-143px] left-2">
                    ..<Link to="">Continue Reading</Link>
                  </span>
                </p>
                <Link className="grid place-items-center place-content-center grid-cols-2 text-[#E2A100] lg:pt-[25px]">
                  <button className="text-[18px]">More</button>
                  <FaLongArrowAltRight size={23} className=""></FaLongArrowAltRight>
                </Link>
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className="w-auto lg:w-[970px] h-[550px] lg:h-auto glass">
            <div className="flex flex-col lg:flex-row lg:p-10 lg:justify-between">
              <div>
                <img
                  className="lg:h-[500px] lg:w-[690px] h-[222px]"
                  src={project5}
                  alt="project-5"
                />
              </div>
              <div className="flex items-center flex-col w-[350px]">
                <h1 className="text-[#FFFFFF] font-semibold text-[24px]  pb-[25px]">
                  INTENSITY-FITNESS-CLUB
                </h1>
                <p className="p-5 h-[200px] lg:h-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ut orci eu elit consequat posuere ut sed elit. Nulla et
                  tristique felis. Morbi quis orci non purus blandit fringilla.
                  Etiam et mollis eros. Duis venenatis vulputate lacus, non
                  tristique eros placerat vel.{" "}
                  <span className="lg:visible invisible">
                    Nam nec magna lacus. Etiam euismod egestas mauris nec
                    mollis. Phasellus efficitur et ex vel condimentum. Cras enim
                    purus, tempor sed massa vel, accumsan bibendum magna. Nullam
                    hendrerit cursus purus, sit amet viverra arcu gravida vel.
                  </span>
                  <span className="text-red-600 lg:invisible visible relative top-[-143px] left-2">
                    ..<Link to="">Continue Reading</Link>
                  </span>
                </p>
                <Link className="grid place-items-center place-content-center grid-cols-2 text-[#E2A100] lg:pt-[25px]">
                  <button className="text-[18px]">More</button>
                  <FaLongArrowAltRight size={23} className=""></FaLongArrowAltRight>
                </Link>
              </div>
            </div>
          </div>

          {/* 6 */}
          <div className="w-auto lg:w-[970px] h-[550px] lg:h-auto glass">
            <div className="flex flex-col lg:flex-row lg:p-10 lg:justify-between">
              <div>
                <img
                  className="lg:h-[500px] lg:w-[690px] h-[222px]"
                  src={project6}
                  alt="project-6"
                />
              </div>
              <div className="flex items-center flex-col w-[350px]">
                <h1 className="text-[#FFFFFF] font-semibold text-[24px]  pb-[25px]">
                  Speed Typer_
                </h1>
                <p className="p-5 h-[200px] lg:h-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ut orci eu elit consequat posuere ut sed elit. Nulla et
                  tristique felis. Morbi quis orci non purus blandit fringilla.
                  Etiam et mollis eros. Duis venenatis vulputate lacus, non
                  tristique eros placerat vel.{" "}
                  <span className="lg:visible invisible">
                    Nam nec magna lacus. Etiam euismod egestas mauris nec
                    mollis. Phasellus efficitur et ex vel condimentum. Cras enim
                    purus, tempor sed massa vel, accumsan bibendum magna. Nullam
                    hendrerit cursus purus, sit amet viverra arcu gravida vel.
                  </span>
                  <span className="text-red-600 lg:invisible visible relative top-[-143px] left-2">
                    ..<Link to="">Continue Reading</Link>
                  </span>
                </p>
                <Link className="grid place-items-center place-content-center grid-cols-2 text-[#E2A100] lg:pt-[25px]">
                  <button className="text-[18px]">More</button>
                  <FaLongArrowAltRight size={23} className=""></FaLongArrowAltRight>
                </Link>
              </div>
            </div>
          </div>

          {/* 7 */}
          <div className="w-auto lg:w-[970px] h-[550px] lg:h-auto glass">
            <div className="flex flex-col lg:flex-row lg:p-10 lg:justify-between">
              <div>
                <img
                  className="lg:h-[500px] lg:w-[690px] h-[222px]"
                  src={project7}
                  alt="project-7"
                />
              </div>
              <div className="flex items-center flex-col w-[350px]">
                <h1 className="text-[#FFFFFF] font-semibold text-[24px]  pb-[25px]">
                  Daily Portal
                </h1>
                <p className="p-5 h-[200px] lg:h-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ut orci eu elit consequat posuere ut sed elit. Nulla et
                  tristique felis. Morbi quis orci non purus blandit fringilla.
                  Etiam et mollis eros. Duis venenatis vulputate lacus, non
                  tristique eros placerat vel.{" "}
                  <span className="lg:visible invisible">
                    Nam nec magna lacus. Etiam euismod egestas mauris nec
                    mollis. Phasellus efficitur et ex vel condimentum. Cras enim
                    purus, tempor sed massa vel, accumsan bibendum magna. Nullam
                    hendrerit cursus purus, sit amet viverra arcu gravida vel.
                  </span>
                  <span className="text-red-600 lg:invisible visible relative top-[-143px] left-2">
                    ..<Link to="">Continue Reading</Link>
                  </span>
                </p>
                <Link className="grid place-items-center place-content-center grid-cols-2 text-[#E2A100] lg:pt-[25px]">
                  <button className="text-[18px]">More</button>
                  <FaLongArrowAltRight size={23} className=""></FaLongArrowAltRight>
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
};

export default Projects;