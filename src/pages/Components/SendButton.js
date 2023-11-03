import React from "react";
import "../CSS/button.css";

const SendButton = ({ name }) => {
  return (
    <div className="w-full">
      <button
        class="btn2 w-full h-10 relative rounded-sm bg-[#E2A100] hover:font-bold tracking-wider leading-none overflow-hidden hover:text-black"
        type="button"
      >
        <span class="absolute inset-0 bg-[#00C4F0] py-4 text-white"></span>
        <span class="absolute inset-0 flex justify-center items-center font-bold">
          {name}
        </span>
      </button>
    </div>
  );
};

export default SendButton;
