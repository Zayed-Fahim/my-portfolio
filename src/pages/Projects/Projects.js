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
      <div style={{position:"relative"}} className="slick-dots">
        <ul className=""> {dots} </ul>
      </div>
    )
  };
    return (
      <div className="h-[950px] bg-gradient-to-r from-[#414141] to-[#2D2D2D]">
        <h1 className="text-[#E4E4E4] text-5xl font-bold text-center p-20">
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
          className="container mx-auto text-white pt-10 pb-10 px-44"
        >
          <div className="w-[970px] glass">
            <div className="flex p-10 justify-between">
              <div>
                <img
                  className="h-[500px] w-[690px]"
                  src={project1}
                  alt="project-1"
                />
              </div>
              <div className="flex items-center flex-col w-[350px]">
                <h1 className="text-[#FFFFFF] font-semibold text-[24px]  pb-[25px]">
                  phones.com
                </h1>
                <p className="p-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ut orci eu elit consequat posuere ut sed elit. Nulla et
                  tristique felis. Morbi quis orci non purus blandit fringilla.
                  Etiam et mollis eros. Duis venenatis vulputate lacus, non
                  tristique eros placerat vel. Nam nec magna lacus. Etiam
                  euismod egestas mauris nec mollis. Phasellus efficitur et ex
                  vel condimentum. Cras enim purus, tempor sed massa vel,
                  accumsan bibendum magna. Nullam hendrerit cursus purus, sit
                  amet viverra arcu gravida vel.
                </p>
                <div className="flex items-center gap-2 text-[#E2A100] pt-[25px]">
                  <button className="text-[18px]">More</button>
                  <FaLongArrowAltRight className="w-[18px] h-[30px]"></FaLongArrowAltRight>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[970px] glass">
            <div className="flex p-10 justify-between">
              <div>
                <img
                  className="h-[500px] w-[690px]"
                  src={project2}
                  alt="project-2"
                />
              </div>
              <div className="flex items-center flex-col w-[350px]">
                <h1 className="text-[#FFFFFF] font-semibold text-[24px]  pb-[25px]">
                  DELIVERY dot com
                </h1>
                <p className="p-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ut orci eu elit consequat posuere ut sed elit. Nulla et
                  tristique felis. Morbi quis orci non purus blandit fringilla.
                  Etiam et mollis eros. Duis venenatis vulputate lacus, non
                  tristique eros placerat vel. Nam nec magna lacus. Etiam
                  euismod egestas mauris nec mollis. Phasellus efficitur et ex
                  vel condimentum. Cras enim purus, tempor sed massa vel,
                  accumsan bibendum magna. Nullam hendrerit cursus purus, sit
                  amet viverra arcu gravida vel.
                </p>
                <div className="flex items-center gap-2 text-[#E2A100] pt-[25px]">
                  <button className="text-[18px]">More</button>
                  <FaLongArrowAltRight className="w-[18px] h-[30px]"></FaLongArrowAltRight>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[970px] glass">
            <div className="flex p-10 justify-between">
              <div>
                <img
                  className="h-[500px] w-[690px]"
                  src={project3}
                  alt="project-3"
                />
              </div>
              <div className="flex items-center flex-col w-[350px]">
                <h1 className="text-[#FFFFFF] font-semibold text-[24px]  pb-[25px]">
                  Active Learning
                </h1>
                <p className="p-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ut orci eu elit consequat posuere ut sed elit. Nulla et
                  tristique felis. Morbi quis orci non purus blandit fringilla.
                  Etiam et mollis eros. Duis venenatis vulputate lacus, non
                  tristique eros placerat vel. Nam nec magna lacus. Etiam
                  euismod egestas mauris nec mollis. Phasellus efficitur et ex
                  vel condimentum. Cras enim purus, tempor sed massa vel,
                  accumsan bibendum magna. Nullam hendrerit cursus purus, sit
                  amet viverra arcu gravida vel.
                </p>
                <div className="flex items-center gap-2 text-[#E2A100] pt-[25px]">
                  <button className="text-[18px]">More</button>
                  <FaLongArrowAltRight className="w-[18px] h-[30px]"></FaLongArrowAltRight>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[970px] glass">
            <div className="flex p-10 justify-between">
              <div>
                <img
                  className="h-[500px] w-[690px]"
                  src={project4}
                  alt="project-4"
                />
              </div>
              <div className="flex items-center flex-col w-[350px]">
                <h1 className="text-[#FFFFFF] font-semibold text-[24px]  pb-[25px]">
                  Quiz 2 Go
                </h1>
                <p className="p-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ut orci eu elit consequat posuere ut sed elit. Nulla et
                  tristique felis. Morbi quis orci non purus blandit fringilla.
                  Etiam et mollis eros. Duis venenatis vulputate lacus, non
                  tristique eros placerat vel. Nam nec magna lacus. Etiam
                  euismod egestas mauris nec mollis. Phasellus efficitur et ex
                  vel condimentum. Cras enim purus, tempor sed massa vel,
                  accumsan bibendum magna. Nullam hendrerit cursus purus, sit
                  amet viverra arcu gravida vel.
                </p>
                <div className="flex items-center gap-2 text-[#E2A100] pt-[25px]">
                  <button className="text-[18px]">More</button>
                  <FaLongArrowAltRight className="w-[18px] h-[30px]"></FaLongArrowAltRight>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[970px] glass">
            <div className="flex p-10 justify-between">
              <div>
                <img
                  className="h-[500px] w-[690px]"
                  src={project5}
                  alt="project-5"
                />
              </div>
              <div className="flex items-center flex-col w-[350px]">
                <h1 className="text-[#FFFFFF] font-semibold text-[24px]  pb-[25px]">
                  INTENSITY-FITNESS-CLUB
                </h1>
                <p className="p-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ut orci eu elit consequat posuere ut sed elit. Nulla et
                  tristique felis. Morbi quis orci non purus blandit fringilla.
                  Etiam et mollis eros. Duis venenatis vulputate lacus, non
                  tristique eros placerat vel. Nam nec magna lacus. Etiam
                  euismod egestas mauris nec mollis. Phasellus efficitur et ex
                  vel condimentum. Cras enim purus, tempor sed massa vel,
                  accumsan bibendum magna. Nullam hendrerit cursus purus, sit
                  amet viverra arcu gravida vel.
                </p>
                <div className="flex items-center gap-2 text-[#E2A100] pt-[25px]">
                  <button className="text-[18px]">More</button>
                  <FaLongArrowAltRight className="w-[18px] h-[30px]"></FaLongArrowAltRight>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[970px] glass">
            <div className="flex p-10 justify-between">
              <div>
                <img
                  className="h-[500px] w-[690px]"
                  src={project6}
                  alt="project-6"
                />
              </div>
              <div className="flex items-center flex-col w-[350px]">
                <h1 className="text-[#FFFFFF] font-semibold text-[24px]  pb-[25px]">
                  Speed Typer_
                </h1>
                <p className="p-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ut orci eu elit consequat posuere ut sed elit. Nulla et
                  tristique felis. Morbi quis orci non purus blandit fringilla.
                  Etiam et mollis eros. Duis venenatis vulputate lacus, non
                  tristique eros placerat vel. Nam nec magna lacus. Etiam
                  euismod egestas mauris nec mollis. Phasellus efficitur et ex
                  vel condimentum. Cras enim purus, tempor sed massa vel,
                  accumsan bibendum magna. Nullam hendrerit cursus purus, sit
                  amet viverra arcu gravida vel.
                </p>
                <div className="flex items-center gap-2 text-[#E2A100] pt-[25px]">
                  <button className="text-[18px]">More</button>
                  <FaLongArrowAltRight className="w-[18px] h-[30px]"></FaLongArrowAltRight>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[970px] glass">
            <div className="flex p-10 justify-between">
              <div>
                <img
                  className="h-[500px] w-[690px]"
                  src={project7}
                  alt="project-7"
                />
              </div>
              <div className="flex items-center flex-col w-[350px]">
                <h1 className="text-[#FFFFFF] font-semibold text-[24px]  pb-[25px]">
                  Daily Portal
                </h1>
                <p className="p-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ut orci eu elit consequat posuere ut sed elit. Nulla et
                  tristique felis. Morbi quis orci non purus blandit fringilla.
                  Etiam et mollis eros. Duis venenatis vulputate lacus, non
                  tristique eros placerat vel. Nam nec magna lacus. Etiam
                  euismod egestas mauris nec mollis. Phasellus efficitur et ex
                  vel condimentum. Cras enim purus, tempor sed massa vel,
                  accumsan bibendum magna. Nullam hendrerit cursus purus, sit
                  amet viverra arcu gravida vel.
                </p>
                <div className="flex items-center gap-2 text-[#E2A100] pt-[25px]">
                  <button className="text-[18px]">More</button>
                  <FaLongArrowAltRight className="w-[18px] h-[30px]"></FaLongArrowAltRight>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
};

export default Projects;