import React from 'react';
import me from '../../assets/me/formal.png';
import { Typewriter } from "react-simple-typewriter";
import { FaCode, FaHtml5, FaNode, FaReact } from 'react-icons/fa';
import { SiFirebase } from "react-icons/si";
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import cv from "../../assets/cv/Sayed Asif Zayed.png";

const Banner = () => {
    return (
      <div>
        <div className="h-[910px] lg:h-[853px] bg-gradient-to-r from-[#2C2C2C] to-[#1C1C1C]">
          <div className="flex flex-col-reverse gap-0 lg:grid lg:grid-cols-2 container mx-auto">
            <div className="flex flex-col relative lg:top-72">
              <h1 className="text-[#E4E4E4] text-4xl m-5 mt-20 lh:mt-auto lg:m-0 lg:text-5xl">HELLO</h1>
              <div className="leading-[72px] lg:mt-6 lg:w-[660px] lg:h-[136px] h-[100px]">
                <h1 className="text-[#E4E4E4] text-4xl lg:text-7xl mb-4 ml-5 lg:ml-0 lg:mb-0 font-bold">
                  I'AM{" "}
                  <span className="text-[#00C4F0] font-bold">
                    <Typewriter
                      words={[
                        "SAYED ASIF ZAYED",
                        "FRONT-END DEVELOPER",
                        "MERN STACK DEVELOPER",
                      ]}
                      loop
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={80}
                      delaySpeed={1000}
                    />
                  </span>
                </h1>
              </div>
              <p className="text-[#E4E4E4] lg:font-[18px] ml-5 mb-4 lg:ml-0 lg:mb-0 lg:mt-8">
                I've been doing web design, front-end and back-end development{" "}
                <br /> for a year now. Do you need a website design, site
                layout, or maybe
                <br /> a turnkey website? Then contact me to hire for your work.
              </p>
              <div className="flex gap-10 ml-5 mb-4 lg:ml-0 lg:mb-0 lg:mt-8">
                <Link>
                  <PhotoProvider>
                    <PhotoView src={cv}>
                      <button className="text-black h-[40px] px-8 lg:px-10 font-bold bg-gradient-to-r from-[#E2A300] to-[#E29500] rounded-[6px] shadow-[0_2px_13px_rgba(226,158,0,0.48)]">
                        Resume
                      </button>
                    </PhotoView>
                  </PhotoProvider>
                </Link>
                <Link>
                  <button className="text-black h-[40px] px-8 lg:px-10 font-bold bg-gradient-to-r from-[#E2A300] to-[#E29500] rounded-[6px] shadow-[0_2px_13px_rgba(226,158,0,0.48)]">
                    Hire Me
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <div className="w-[350px] h-[350px] lg:w-[575px] lg:h-[575px] border-solid border-[43px] top-[160px] lg:top-auto lg:border-[67px] border-[#00C4F0] drop-shadow-[0_0_152px_rgba(0,196,240,0.42)] rounded-[50%] absolute lg:bottom-[121px] mx-[20px]"></div>
              <div className="absolute bottom-[121px] right-[25px] lg:right-auto top-[30px] lg:top-auto">
                <img
                  className="h-[480px] m-1 lg:m-auto lg:h-[685px] lg:ml-10"
                  src={me}
                  alt="me-1"
                />
              </div>
            </div>
            <div className="invisible md:visible lg:visible">
              <div className="w-[90px] h-[90px] bg-gradient-to-r from-[#414141] to-[#2D2D2D] text-3xl font-bold rounded-[50%] flex justify-center items-center relative left-[760px] top-[240px]">
                <FaHtml5 className="h-16 w-16 text-[#00C4F0]"></FaHtml5>
              </div>
              <div className="w-[90px] h-[90px] bg-gradient-to-r from-[#414141] to-[#2D2D2D] text-3xl font-bold rounded-[50%] flex justify-center items-center relative left-[755px] top-[-45px]">
                <FaReact className="h-16 w-16 text-[#00C4F0]"></FaReact>
              </div>
              <div className="w-[90px] h-[90px] bg-gradient-to-r from-[#414141] to-[#2D2D2D] text-3xl font-bold rounded-[50%] flex justify-center items-center relative left-[870px] top-[-280px]">
                <SiFirebase className="h-16 w-16 text-[#00C4F0]"></SiFirebase>
              </div>
              <div className="w-[90px] h-[90px] bg-gradient-to-r from-[#414141] to-[#2D2D2D] text-3xl font-bold rounded-[50%] flex justify-center items-center relative left-[1200px] top-[-370px]">
                <FaNode className="h-16 w-16 text-[#00C4F0]"></FaNode>
              </div>
              <div className="w-[90px] h-[90px] bg-gradient-to-r from-[#414141] to-[#2D2D2D] text-3xl font-bold rounded-[50%] flex justify-center items-center relative left-[1310px] top-[-310px]">
                <FaCode className="h-16 w-16 text-[#00C4F0]"></FaCode>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;