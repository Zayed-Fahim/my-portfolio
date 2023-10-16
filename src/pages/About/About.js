import React from "react";
import topLeft from "../../assets/me/IMG_0919.DNG";
import middleRight from "../../assets/me/IMG_0462.png";
import bottomLeft from "../../assets/me/IMG_20211021_111432.jpg";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#2C2C2C] to-[#1C1C1C] max-h-max py-16 lg:mb-auto lg:py-0 lg:max-h-[1075px]"
      id="about-me"
    >
      <div className="container mx-auto hidden lg:block">
        <div className="lg:w-[792px] lg:min-h-[792px] border-solid border-[89px] border-[#E4E4E4] drop-shadow-[0_4px_70px_rgba(255,255,255,0.25)] rounded-[50%] relative top-[125px] mb- left-24">
          <div className="lg:w-[356px] lg:h-[356px] border-solid border-[34px] border-[#E2A200] drop-shadow-[0_4px_70px_rgba(226,162,0,0.25)] rounded-[50%] relative bottom-[150px] left-[800px]">
            <div className="w-[486px] h-[486px] border-solid border-[55px] border-[#00C4F0] drop-shadow-[0_4px_70px_rgba(0,193,236,0.25)] rounded-[50%] relative top-[420px] right-[80px]">
              <div className="w-[330px] p-6 bg-[#2C2C2C] rounded-[14px] relative right-[750px] bottom-[500px]">
                <img
                  className="w-[272px] h-[240px] shadow-[0_0_0_6px_#686868]"
                  src={topLeft}
                  alt="me-1"
                />
              </div>
              <div className="w-[330px] p-6 bg-[#2C2C2C] rounded-[14px] relative right-[750px] bottom-[140px]">
                <img
                  className="w-[272px] h-[230px] shadow-[0_0_0_6px_#686868]"
                  src={bottomLeft}
                  alt="me-2"
                />
              </div>
              <div className="w-[330px] h-[440px] p-6 bg-[#2C2C2C] rounded-[14px] relative bottom-[840px] left-12">
                <img
                  className="w-[310px] h-[395px] shadow-[0_0_0_6px_#686868]"
                  src={middleRight}
                  alt="me-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:relative lg:max-w-[496px] lg:h-[822px] bg-[#2C2C2C] rounded-[14px] lg:bottom-[665px] lg:left-[740px] bottom-[700px] mx-5 z-[1] lg:mx-0">
        <div className="relative lg:left-16 bottom-7 left-7">
          <span className="text-[38px] font-bold lg:text-5xl text-white">
            <Typewriter
              words={["ABOUT ME"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={200}
            />
          </span>
        </div>
        <div className="relative">
          <p className="px-5 pb-5 lg:px-[55px] lg:pb-[55px] lg:py-5 text-[#FFFFFF]">
            Sayed Asif Zayed, a 22-year-old resident of Hazaribagh, Dhaka,
            with a degree in Computer Science and Engineering (CSE). I proudly
            identify as a Full-stack MERN developer, leveraging my technical
            expertise to craft cutting-edge web experiences. My passion for
            coding runs deep, and I'm driven by the art of transforming ideas
            into functional websites. With React, Node.js, and MongoDB, I bring
            user-friendly and efficient web solutions to life. The intricacies
            of frontend and backend development are where I thrive, ensuring
            that each project I undertake is not only visually appealing but
            also responsive and dynamic. Beyond the code, my life is a balanced
            blend of sports, gaming, and exploration. Whether it's the intensity
            of football, the precision of cricket, or the agility of badminton,
            sports keep me physically active. Video games offer a digital arena
            for my competitive spirit, and I'm an active participant in the
            global gaming community. On sunny days, I embark on cycling
            adventures, relishing the freedom of open roads. My wanderlust leads
            me to explore new cultures and landscapes through travel, further
            enriching my experiences. Yet, it's through web development that I
            channel my passion and creativity, ensuring that the technical heart
            of every project beats efficiently and effectively. In a world full
            of possibilities, I find fulfillment in both the art and science of
            web development, creating innovative solutions that leave a lasting
            impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
