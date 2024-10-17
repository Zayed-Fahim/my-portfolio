import { Loader } from "@/components/atoms";
import React from "react";
import "../app/styles/loader.css";

const Loading = () => {
  return (
    <div className="fixed z-[9999999] inset-0 flex justify-center items-center">
      <div className="mask-overlay" />
      <Loader />
    </div>
  );
};

export default Loading;
