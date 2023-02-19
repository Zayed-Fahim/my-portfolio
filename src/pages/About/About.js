import React from "react";
import about1 from "../../assets/me/about-1.jpg";
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
              <div className="w-[330px] p-6 bg-[#2C2C2C] rounded-[14px] relative right-[750px] bottom-[480px]">
                <img
                  className="w-[272px]  shadow-[0_0_0_6px_#686868]"
                  src={about1}
                  alt="me-2"
                />
              </div>
              <div className="w-[330px] p-6 bg-[#2C2C2C] rounded-[14px] relative right-[750px] bottom-[85px]">
                <img
                  className="w-[272px] shadow-[0_0_0_6px_#686868]"
                  src={about1}
                  alt="me-2"
                />
              </div>
              <div className="w-[330px] h-[485px] p-6 bg-[#2C2C2C] rounded-[14px] relative bottom-[780px] left-12">
                <img
                  className="w-[310px] h-[435px] shadow-[0_0_0_6px_#686868]"
                  src={about1}
                  alt="me-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:relative lg:max-w-[496px]  lg:h-[822px] bg-[#2C2C2C] rounded-[14px] lg:bottom-[665px] lg:left-[740px] bottom-[700px] mx-5 z-[1] lg:mx-0">
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
          <p className="px-5 py-5 lg:px-[55px] lg:pb-[55px] lg:py-5 text-xl text-[#FFFFFF]">
            Hello again everyone! So, you already know that my name is Sayed
            Asif Zayed. A little about myself: student, 18 y.o.,
            athlete-football player, I love creativity since childhood, I live
            in Donetsk, Ukraine. Why programming? Everything is elementary - I
            like it, the profession of the future, thanks to which I can provide
            myself and fulfill my dream - travel, at the moment I specialize in
            web design, front-end and back-end development, turnkey websites.
            Why should you choose me? I approach each order with great
            responsibility and love, as I want to make a name for myself,
            exclude plagiarism and negligence, fully study the project, the
            client and its target audience, work for quality, trying to make an
            order as quickly and uniquely as possible, taking into account all
            the edits and wishes. By trusting me, you will get the maximum
            return for your project, save your nerves and time. If you are
            interested in me , you want to know something more or use my
            services, then I will provide all my contacts below.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
