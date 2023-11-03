import React from "react";
import "../CSS/button.css";

const HireMeButton = ({ name }) => {
  return (
    <div className="text-white font-bold">
      <button
        class="btn2 px-5 h-[35px] xl:h-10 lg:h-10 relative rounded-sm bg-[#E2A100] hover:font-bold tracking-wider leading-none overflow-hidden hover:text-black"
        type="button"
      >
        <span class="absolute inset-0 bg-[#00C4F0] !text-white"></span>
        <span class="absolute inset-0 flex justify-center items-center font-bold">
          {name}
        </span>
        {name}
      </button>
    </div>
  );
};

export default HireMeButton;
