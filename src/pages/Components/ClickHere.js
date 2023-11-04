import React from "react";
import { Link } from "react-router-dom";
import "../CSS/button.css";

const ClickHere = ({ name, project }) => {
  return (
    <Link
      to={`/projects/${project?.projectID}/${project?.websiteName}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
    >
      <button
        className="btn2 px-16 lg:px-20 py-5 lg:py-0 xl:h-10 lg:h-10 relative rounded-sm bg-[#E2A100] text-center shadow-md hover:font-bold tracking-wider leading-none overflow-hidden hover:text-black"
        type="button"
      >
        <span className="absolute inset-0 bg-[#00C4F0] text-white"></span>
        <span className="absolute inset-0 flex justify-center items-center font-bold">
          {name}
        </span>
      </button>
    </Link>
  );
};

export default ClickHere;
