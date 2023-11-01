import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaCode, FaNode, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import resume from "../../assets/cv/Sayed Asif Zayed - Resume.png";
const ReBanner = () => {
  return (
    <div className="bg-gradient-to-r from-[#2C2C2C] to-[#1C1C1C]">
      <div className="container mx-auto max-h-auto lg:h-[860px] flex flex-col-reverse mt-[-830px] lg:m-auto gap-60 lg:grid grid-cols-2 place-items-center">
        {/* banner header part start */}
        <div className="flex flex-col lg:pt-44 mb-5">
          <h1 className="text-[#E4E4E4] text-4xl m-5 mt-20 lh:mt-auto lg:m-0 lg:text-5xl">
            HELLO
          </h1>
          <div className="leading-[72px] lg:mt-6 lg:w-[660px] lg:h-[136px] h-[100px]">
            <h1 className="text-[#E4E4E4] text-4xl lg:text-7xl mb-4 ml-5 lg:ml-0 lg:mb-0 font-bold">
              I'AM{" "}
              <span className="text-[#00C4F0] font-bold">
                <Typewriter
                  words={[
                    "SAYED ASIF ZAYED",
                    "FRONT-END DEVELOPER",
                    "MERN STACK DEVELOPER",
                    "FULL STACK DEVELOPER",
                  ]}
                  loop={1}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={80}
                  delaySpeed={1000}
                />
              </span>
            </h1>
          </div>
          <p className="text-[#E4E4E4] lg:text-left lg:text-[18px] lg:w-[600px] mx-5 mb-4 lg:ml-0 lg:mb-0 lg:mt-8">
            I am the digital genius behind my website as a Full-Stack
            developer(MERN). To bring my idea to life, I use a varied range of
            technical talents, seamlessly combining frontend and backend
            programming. I create a visually stunning and user-friendly frontend
            with React that captivates my audience. To handle data and perform
            the complicated logic that runs my site, I utilize Node.js and
            MongoDB behind the scenes. I am committed to improving efficiency
            and functionality. My website transforms into a dynamic, flexible,
            and resilient online presence as a result of my expertise,
            transforming my idea into a digital masterpiece.
          </p>
          <div className="flex self-start gap-10 ml-5 mb-4 lg:ml-0 lg:mb-0 lg:mt-8">
            <PhotoProvider
              speed={() => 800}
              easing={(type) =>
                type === 2
                  ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                  : "cubic-bezier(0.34, 1.56, 0.64, 1)"
              }
              bannerVisible={false}
            >
              <PhotoView src={resume}>
                <button className="text-black h-[40px] px-8 lg:px-10 font-bold bg-gradient-to-r from-[#E2A300] to-[#E29500] rounded-[6px] shadow-[0_2px_13px_rgba(226,158,0,0.48)]">
                  Resume
                </button>
              </PhotoView>
            </PhotoProvider>
            <Link>
              <button className="text-black h-[40px] px-8 lg:px-10 font-bold bg-gradient-to-r from-[#E2A300] to-[#E29500] rounded-[6px] shadow-[0_2px_13px_rgba(226,158,0,0.48)]">
                Hire Me
              </button>
            </Link>
          </div>
        </div>
        {/* banner header part end */}
        {/* banner img part start */}
        <div className="grid relative top-64 lg:top-[196px] mx-auto">
          <div className="w-[350px] h-[350px] lg:w-[575px] lg:h-[575px] border-solid border-[43px] lg:border-[67px] border-[#00C4F0] drop-shadow-[0_0_152px_rgba(0,196,240,0.42)] rounded-[50%]">
            {/* image icon part start */}
            <div className="invisible md:visible lg:visible">
              <div className="w-[90px] h-[90px] bg-gradient-to-r from-[#414141] to-[#2D2D2D] text-3xl font-bold rounded-[50%] flex justify-center items-center relative right-5 bottom-8">
                <SiExpress className="h-16 w-16 text-[#00C4F0]"></SiExpress>
              </div>
              <div className="w-[90px] h-[90px] bg-gradient-to-r from-[#414141] to-[#2D2D2D] text-3xl font-bold rounded-[50%] flex justify-center items-center relative top-12 right-[108px]">
                <SiMongodb className="h-16 w-16 text-[#00C4F0]"></SiMongodb>
              </div>
              <div className="w-[90px] h-[90px] bg-gradient-to-r from-[#414141] to-[#2D2D2D] text-3xl font-bold rounded-[50%] flex justify-center items-center relative bottom-[212px] left-[370px]">
                <FaReact className="h-16 w-16 text-[#00C4F0]"></FaReact>
              </div>
              <div className="w-[90px] h-[90px] bg-gradient-to-r from-[#414141] to-[#2D2D2D] text-3xl font-bold rounded-[50%] flex justify-center items-center relative bottom-[132px] left-[460px]">
                <FaNode className="h-16 w-16 text-[#00C4F0]"></FaNode>
              </div>
              <div className="w-[90px] h-[90px] bg-gradient-to-r from-[#414141] to-[#2D2D2D] text-3xl font-bold rounded-[50%] flex justify-center items-center relative right-16 bottom-8">
                <FaCode className="h-16 w-16 text-[#00C4F0]"></FaCode>
              </div>
            </div>
            {/* image icon part end */}
          </div>
        </div>
        {/* banner img part end */}
        <div className="relative bottom-[-867px] lg:bottom-[816px] right-2 left-[.4px] lg:left-[865px] border-b lg:border-b-0">
          <img
            className="h-[480px] m-1 relative right-2 lg:m-auto lg:h-[685px] lg:ml-8"
            src="https://i.ibb.co/ggY9Bjd/formal.png"
            alt="me-1"
          />
        </div>
      </div>
    </div>
  );
};

export default ReBanner;
