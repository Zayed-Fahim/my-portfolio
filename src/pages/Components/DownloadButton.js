import React from "react";
import { Link } from "react-router-dom";
import "../CSS/button.css";

const DownloadButton = ({ name }) => {
  return (
    <>
      <li>
        <Link
          to="../../assets/cv/Sayed Asif Zayed - CV.pdf"
          target="_blank"
          download
          className="lg:flex lg:items-center lg:justify-center"
        >
          <button
            className="btn2 px-5 h-[35px] xl:h-10 lg:h-10 relative rounded-sm bg-[#E2A100] hover:font-bold tracking-wider leading-none overflow-hidden hover:text-black"
            type="button"
          >
            <span className="absolute inset-0 bg-[#00C4F0]"></span>
            <span className="absolute inset-0 flex justify-center items-center font-bold">
              {name}
            </span>
            {name}
          </button>
        </Link>
      </li>
    </>
  );
};

export default DownloadButton;
