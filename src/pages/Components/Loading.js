import React from "react";
import "../CSS/loader.css";

const Loading = () => {
  return (
    <div className="h-screen w-full flex gap-4 justify-center items-center">
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
