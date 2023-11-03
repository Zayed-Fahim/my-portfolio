import React from "react";
import "../CSS/button.css";
import { Link } from "react-router-dom";

const ExploreProjectButton = ({ name }) => {
  return (
    <div className="flex items-center justify-center pb-14 lg:pb-0 lg:mt-6">
      <Link
        to="/projects"
        className="text-white font-bold rounded-sm bg-[#E2A100]"
        onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
      >
        <button
          className="btn2 px-5 h-[35px] xl:h-10 lg:h-10 relative rounded-sm bg-[#E2A100] hover:font-bold tracking-wider leading-none overflow-hidden hover:text-black"
          type="button"
        >
          <span className="absolute inset-0 bg-[#00C4F0] !text-white"></span>
          <span className="absolute inset-0 flex justify-center items-center font-bold">
            {name}
          </span>
          {name}
        </button>
      </Link>
    </div>
  );
};

export default ExploreProjectButton;
