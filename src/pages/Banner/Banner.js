import React from 'react';
import me from '../../assets/me/formal.png';
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
    return (
      <div className="h-[790px] bg-gradient-to-r from-[#2C2C2C] to-[#1C1C1C]">
        <div className="grid grid-cols-2 container mx-auto">
          <div className="flex flex-col relative top-60">
            <h1 className="text-[#E4E4E4] text-5xl">HELLO</h1>
            <div className="leading-[72px] mt-6 w-[660px] h-[136px]">
              <h1 className="text-[#E4E4E4] text-7xl font-bold">
                I'AM{" "}
                <span className="text-[#00C4F0] font-bold">
                  <Typewriter
                    words={["SAYED ASIF ZAYED", "FRONT-END DEVELOPER", "MERN STACK DEVELOPER"]}
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
            <p className="text-[#E4E4E4] font-[18px] mt-8">
              I've been doing web design, front-end and back-end development{" "}
              <br /> for a year now. Do you need a website design, site layout,
              or maybe
              <br /> a turnkey website? Then contact me to hire for your work.
            </p>
            <div className="flex gap-10 mt-8">
              <button className="text-black h-[40px] px-10 font-bold bg-gradient-to-r from-[#E2A300] to-[#E29500] rounded-[6px] shadow-[0_2px_13px_rgba(226,158,0,0.48)]">
                Resume
              </button>
              <button className="text-black h-[40px] px-10 font-bold bg-gradient-to-r from-[#E2A300] to-[#E29500] rounded-[6px] shadow-[0_2px_13px_rgba(226,158,0,0.48)]">
                Hire Me
              </button>
            </div>
          </div>
          <div>
            <div className="w-[575px] h-[575px] border-solid border-[67px] border-[#00C4F0] drop-shadow-[0_0_152px_rgba(0,196,240,0.42)] rounded-[50%]  absolute bottom-[121px]"></div>
            <div className="absolute bottom-[121px]">
              <img className="h-[685px] ml-5" src={me} alt="me-1" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;