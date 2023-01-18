import React from 'react';
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

const Blog = () => {
    return (
      <div className="bg-gradient-to-r from-[#2C2C2C] to-[#1C1C1C]" id="blog">
        <h1 className="h-[500px] lg:h-screen flex justify-center items-center text-white text-5xl lg:text-8xl">
          COMING SOON
        </h1>
        <div className="lg:visible invisible">
          <ScrollUpButton
            style={{ width: 60, height: 60, padding: 5 }}
            ToggledStyle={{
              position: "relative",
              background: "#E2A300",
              border: "none",
              fill: "white",
              left: 1485,
              top: 160,
            }}
            EasingType="easeOutCubic"
            AnimationDuration={2500}
          />
        </div>
        {/* <div className="visible lg:invisible ">
          <ScrollUpButton
            style={{ width: 50, height: 50, padding: 5 }}
            ToggledStyle={{
              position: "fixed",
              background: "#E2A300",
              border: "none",
              fill: "white",
              left: 100,
              top: 160,
            }}
            EasingType="easeOutCubic"
          />
        </div> */}
      </div>
    );
};

export default Blog;