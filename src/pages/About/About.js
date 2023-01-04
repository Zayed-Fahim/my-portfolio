import React from "react";
import about1 from '../../assets/me/about-1.jpg';
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <div className="h-[1250px] bg-gradient-to-r from-[#414141] to-[#2D2D2D]">
      <div className="container mx-auto">
        <div className="w-[792px] h-[792px] border-solid border-[89px] border-[#E4E4E4] drop-shadow-[0_4px_70px_rgba(255,255,255,0.25)] rounded-[50%] relative top-[200px] left-32"></div>
        <div className="w-[356px] h-[356px] border-solid border-[34px] border-[#E2A200] drop-shadow-[0_4px_70px_rgba(226,162,0,0.25)] rounded-[50%] absolute left-[1186px] top-[995px]"></div>
        <div className="w-[486px] h-[486px] border-solid border-[55px] border-[#00C4F0] drop-shadow-[0_4px_70px_rgba(0,193,236,0.25)] rounded-[50%] absolute left-[1050px] top-[1480px]"></div>
      </div>
      <div className="absolute left-[835px] top-[1013px] z-[1]">
        {/* <h1 className="text-5xl text-white">ABOUT ME</h1> */}
        <span className="text-5xl text-white">
          <Typewriter
            words={["ABOUT ME"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={80}
            delaySpeed={1000}
          />
        </span>
      </div>
      <div className="w-[496px] h-[822px] bg-[#2C2C2C] rounded-[14px] absolute left-[780px] top-[1040px]">
        <p className="p-[55px] text-xl text-[#FFFFFF]">
          Hello again everyone! So, you already know that my name is Sayed Asif
          Zayed. A little about myself: student, 18 y.o., athlete-football
          player, I love creativity since childhood, I live in Donetsk, Ukraine.
          Why programming? Everything is elementary - I like it, the profession
          of the future, thanks to which I can provide myself and fulfill my
          dream - travel, at the moment I specialize in web design, front-end
          and back-end development, turnkey websites. Why should you choose me?
          I approach each order with great responsibility and love, as I want to
          make a name for myself, exclude plagiarism and negligence, fully study
          the project, the client and its target audience, work for quality,
          trying to make an order as quickly and uniquely as possible, taking
          into account all the edits and wishes. By trusting me, you will get
          the maximum return for your project, save your nerves and time. If you
          are interested in me , you want to know something more or use my
          services, then I will provide all my contacts below.
        </p>
      </div>
      <div className="w-[330px] p-6 bg-[#2C2C2C] rounded-[14px] absolute left-[490px] top-[1000px]">
        <img
          className="w-[272px]  shadow-[0_0_0_6px_#686868]"
          src={about1}
          alt="me-2"
        />
      </div>
      <div className="w-[330px] p-6 bg-[#2C2C2C] rounded-[14px] absolute left-[490px] top-[1645px]">
        <img
          className="w-[272px] shadow-[0_0_0_6px_#686868]"
          src={about1}
          alt="me-2"
        />
      </div>
      <div className="w-[330px] h-[485px] p-6 bg-[#2C2C2C] rounded-[14px] absolute left-[1260px] top-[1210px]">
        <img
          className="w-[310px] h-[435px] shadow-[0_0_0_6px_#686868]"
          src={about1}
          alt="me-2"
        />
      </div>
    </div>
  );
};

export default About;
