import React from 'react';
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

const Blog = () => {
    return (
      <div className="bg-gradient-to-r from-[#2C2C2C] to-[#1C1C1C]" id='blog'>
        <h1 className="h-screen flex justify-center items-center text-white text-8xl">
          COMING SOON
        </h1>
        <div>
          <ScrollUpButton
            style={{ width: 60, height: 60, padding: 5 }}
            ToggledStyle={{
              position: "fixed",
              background: "#E2A300",
              border: "none",
              fill: "white",
                right: 400,
              bottom:100
            }}
            EasingType="easeOutCubic"
          />
        </div>
      </div>
    );
};

export default Blog;