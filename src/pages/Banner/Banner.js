import React from "react";
import { FaCode, FaNode, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import resume from "../../assets/cv/Sayed Asif Zayed - Resume.png";
import HireMeButton from "../Components/HireMeButton";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#2C2C2C] to-[#1C1C1C]">
      <div className="container mx-auto lg:h-screen flex flex-col-reverse lg:flex-row lg:items-center gap-60 lg:gap-[276px] mt-[-830px] lg:m-auto">
        {/* banner header part start */}
        <div className="flex flex-col lg:pt-36 mb-5">
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
                <button
                  className="btn2 px-5 h-[35px] xl:h-10 lg:h-10 relative rounded-sm bg-[#E2A100] font-bold text-white hover:font-bold tracking-wider leading-none overflow-hidden hover:text-black"
                  type="button"
                >
                  <span className="absolute inset-0 bg-[#00C4F0] font-bold !text-white"></span>
                  <span className="absolute inset-0 flex justify-center items-center font-bold">
                    Resume
                  </span>
                  Resume
                </button>
              </PhotoView>
            </PhotoProvider>
            <div>
              <Link
                to="/?contact-me"
                className="hidden lg:block"
                onClick={() => {
                  window.scrollTo({ top: 3835, behavior: "smooth" });
                }}
              >
                <HireMeButton name={"Hire me"} />
              </Link>
              <Link
                to="/?contact-me"
                className="lg:hidden block"
                onClick={() => {
                  window.scrollTo({ top: 3952, behavior: "smooth" });
                }}
              >
                <HireMeButton name={"Hire me"} />
              </Link>
            </div>
          </div>
        </div>
        {/* banner header part end */}
        {/* banner img part start */}
        <div className="grid relative top-[270px] lg:top-[100px] mx-auto">
          <div className="w-[350px] relative h-[350px] lg:w-[600px] lg:h-[500px] border-[30px] border-solid lg:border-[60px] border-[#00C4F0] rounded-[50%] lg:rounded-none lg:rounded-tl-[30%] lg:rounded-br-[30%]">
            {/* image icon part start */}
            <div className="hidden md:block lg:block">
              <div className="w-[90px] h-[90px] bg-gradient-to-r from-[#414141] to-[#2D2D2D] text-3xl font-bold rounded-[50%] flex justify-center items-center relative right-12 bottom-[60px]">
                <SiExpress className="h-16 w-16 text-[#00C4F0]"></SiExpress>
              </div>
              <div className="w-[90px] h-[90px] bg-gradient-to-r from-[#414141] to-[#2D2D2D] text-3xl font-bold rounded-[50%] flex justify-center items-center relative top-10 right-[103px]">
                <SiMongodb className="h-16 w-16 text-[#00C4F0]"></SiMongodb>
              </div>
              <div className="w-[90px] h-[90px] bg-gradient-to-r from-[#414141] to-[#2D2D2D] text-3xl font-bold rounded-[50%] flex justify-center items-center relative bottom-[283px] left-[410px]">
                <FaReact className="h-16 w-16 text-[#00C4F0]"></FaReact>
              </div>
              <div className="w-[90px] h-[90px] bg-gradient-to-r from-[#414141] to-[#2D2D2D] text-3xl font-bold rounded-[50%] flex justify-center items-center relative bottom-[180px] left-[493px]">
                <FaNode className="h-16 w-16 text-[#00C4F0]"></FaNode>
              </div>
              <div className="w-[90px] h-[90px] bg-gradient-to-r from-[#414141] to-[#2D2D2D] text-3xl font-bold rounded-[50%] flex justify-center items-center relative right-[105px] bottom-10">
                <FaCode className="h-16 w-16 text-[#00C4F0]"></FaCode>
              </div>
            </div>
            {/* image icon part end */}
          </div>
        </div>
        {/* banner img part end */}

        <div className="relative flex flex-col justify-center items-center lg:absolute bottom-[-867px] lg:top-[69px] lg:left-[1027px] lg:bottom-2">
          <img
            className="h-[490px] relative right-2.5 lg:right-4 lg:left-1.5 lg:h-[930px] lg:ml-[26px]"
            src="https://i.ibb.co/ggY9Bjd/formal.png"
            alt="me-1"
          />
          <hr className="lg:hidden xl:hidden 2xl:hidden block w-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
