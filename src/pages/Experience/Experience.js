import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNode } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiFirebase, SiVercel } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";

const Experience = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#414141] to-[#2D2D2D]"
      id="experience"
    >
      <h1 className="text-[#E4E4E4] text-[38px] lg:text-5xl font-bold text-center pt-10 lg:pt-28">
        <span className="text-[#00C4F0] font-bold">
          <Typewriter
            words={["EXPERIENCED AT"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <div className="container mx-auto">
        <div className="flex-wrap flex lg:flex-nowrap justify-center pt-10 lg:pt-16 gap-10">
          <div className="bg-[#2A2A2A] rounded-[29px] shadow-[0_4px_6px_rgba(0,0,0,0.47)] w-[150px] h-[150px] lg:w-[230px] lg:h-[230px] flex flex-col justify-center items-center lg:gap-[34px]">
            <FaHtml5 className="h-[75px] w-[75px] text-[#00C4F0]"></FaHtml5>
            <h1 className="text-white lg:text-2xl">HTML5</h1>
          </div>
          <div className="bg-[#2A2A2A] rounded-[29px] shadow-[0_4px_6px_rgba(0,0,0,0.47)] w-[150px] h-[150px] lg:w-[230px] lg:h-[230px] flex flex-col justify-center items-center lg:gap-[34px]">
            <FaCss3Alt className="h-[75px] w-[75px] text-[#00C4F0]"></FaCss3Alt>
            <h1 className="text-white lg:text-2xl">CSS3</h1>
          </div>
          <div className="bg-[#2A2A2A] rounded-[29px] shadow-[0_4px_6px_rgba(0,0,0,0.47)] w-[150px] h-[150px] lg:w-[230px] lg:h-[230px] flex flex-col justify-center items-center lg:gap-[34px]">
            <SiJavascript className="h-[75px] w-[75px] text-[#00C4F0]"></SiJavascript>
            <h1 className="text-white lg:text-2xl">Java Script</h1>
          </div>
          <div className="bg-[#2A2A2A] rounded-[29px] shadow-[0_4px_6px_rgba(0,0,0,0.47)] w-[150px] h-[150px] lg:w-[230px] lg:h-[230px] flex flex-col justify-center items-center lg:gap-[34px]">
            <FaReact className="h-[75px] w-[75px] text-[#00C4F0]"></FaReact>
            <h1 className="text-white lg:text-2xl">React</h1>
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-10 mt-10">
          <div className="bg-[#2A2A2A] rounded-[29px] shadow-[0_4px_6px_rgba(0,0,0,0.47)] w-[150px] h-[150px] lg:w-[230px] lg:h-[230px] flex flex-col justify-center items-center lg:gap-[34px]">
            <SiMongodb className="h-[75px] w-[75px] text-[#00C4F0]"></SiMongodb>
            <h1 className="text-white lg:text-2xl">mongo DB</h1>
          </div>
          <div className="bg-[#2A2A2A] rounded-[29px] shadow-[0_4px_6px_rgba(0,0,0,0.47)] w-[150px] h-[150px] lg:w-[230px] lg:h-[230px] flex flex-col justify-center items-center lg:gap-[34px]">
            <SiExpress className="h-[75px] w-[75px] text-[#00C4F0]"></SiExpress>
            <h1 className="text-white lg:text-2xl">Express JS</h1>
          </div>
          <div className="bg-[#2A2A2A] rounded-[29px] shadow-[0_4px_6px_rgba(0,0,0,0.47)] w-[150px] h-[150px] lg:w-[230px] lg:h-[230px] flex flex-col justify-center items-center lg:gap-[34px]">
            <FaNode className="h-[75px] w-[75px] text-[#00C4F0]"></FaNode>
            <h1 className="text-white lg:text-2xl">Node JS</h1>
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-10 pb-10 lg:pb-32 mt-10">
          <div className="bg-[#2A2A2A] rounded-[29px] shadow-[0_4px_6px_rgba(0,0,0,0.47)] w-[150px] h-[150px] lg:w-[230px] lg:h-[230px] flex flex-col justify-center items-center lg:gap-[34px]">
            <SiFirebase className="h-[75px] w-[75px] text-[#00C4F0]"></SiFirebase>
            <h1 className="text-white lg:text-2xl">Firebase</h1>
          </div>
          <div className="bg-[#2A2A2A] rounded-[29px] shadow-[0_4px_6px_rgba(0,0,0,0.47)] w-[150px] h-[150px] lg:w-[230px] lg:h-[230px] flex flex-col justify-center items-center lg:gap-[34px]">
            <SiVercel className="h-[75px] w-[75px] text-[#00C4F0]"></SiVercel>
            <h1 className="text-white lg:text-2xl">Vercel</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
