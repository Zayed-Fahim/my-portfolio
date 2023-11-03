import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import logo from "../../assets/icon/navLogo.png";
import DownloadButton from "../Components/DownloadButton";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // console.log(currentPath)
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };
  useEffect(() => {
    // Add a scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // console.log(scrollPosition);

  return (
    <div className="z-[55] fixed top-0 navbar h-[64px] bg-[#242526]">
      <div className="dropdown">
        <label tabIndex={0} className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 ml-2 mr-3 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className=" dropdown-content mt-0 p-2 pl-0 w-44 relative left-[-10px]"
        >
          <div className="text-white">
            <ul className="flex flex-col gap-4 p-3 text-[15px]  font-bold bg-gradient-to-r from-[#2C2C2C] to-[#1C1C1C]">
              <li className="hover:text-[#00C4F0]">
                <NavHashLink
                  to="/"
                  smooth
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <div
                    className={`${
                      scrollPosition >= 0 &&
                      scrollPosition <= 835 &&
                      currentPath === "/" &&
                      currentPath !== "/blog"
                        ? "border-b-[3px] w-[57%] text-[#00C4F0] border-[#E2A100]"
                        : "border-none"
                    }`}
                  >
                    Home
                  </div>
                </NavHashLink>
              </li>
              <li className="hover:text-[#00C4F0]">
                <NavHashLink
                  smooth
                  to="/?experience"
                  onClick={() => {
                    window.scrollTo({ top: 1105, behavior: "smooth" });
                  }}
                >
                  <div
                    className={`${
                      scrollPosition >= 836 && scrollPosition <= 1935
                        ? "border-b-[3px] w-[57%] text-[#00C4F0] border-[#E2A100]"
                        : "border-none"
                    }`}
                  >
                    Experience
                  </div>
                </NavHashLink>
              </li>
              <li className="hover:text-[#00C4F0]">
                <NavHashLink
                  smooth
                  to="/?about-me"
                  onClick={() => {
                    window.scrollTo({ top: 2190, behavior: "smooth" });
                  }}
                >
                  <div
                    className={`${
                      scrollPosition >= 1936 && scrollPosition <= 3090
                        ? "border-b-[3px] w-[57%] text-[#00C4F0] border-[#E2A100]"
                        : "border-none"
                    }`}
                  >
                    About me
                  </div>
                </NavHashLink>
              </li>
              <li className="hover:text-[#00C4F0]">
                <NavHashLink
                  smooth
                  to="/?projects"
                  onClick={() => {
                    window.scrollTo({ top: 3262, behavior: "smooth" });
                  }}
                >
                  <div
                    className={`${
                      scrollPosition >= 3091 && scrollPosition <= 3900
                        ? "border-b-[3px] w-[57%] text-[#00C4F0] border-[#E2A100]"
                        : "border-none"
                    }`}
                  >
                    Projects
                  </div>
                </NavHashLink>
              </li>
              <li
                className="hover:text-[#00C4F0]"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}
              >
                <NavHashLink smooth to="/blog">
                  Blogs
                </NavHashLink>
              </li>
              <li className="hover:text-[#00C4F0]">
                <NavHashLink
                  to="/?contact-me"
                  smooth
                  onClick={() => {
                    window.scrollTo({ top: 4081, behavior: "smooth" });
                  }}
                >
                  <div
                    className={`${
                      scrollPosition >= 3901 && scrollPosition <= 4830
                        ? "border-b-[3px] w-[57%] text-[#00C4F0] border-[#E2A100]"
                        : "border-none"
                    }`}
                  >
                    Contact me
                  </div>
                </NavHashLink>
              </li>
              <li>
                <Link
                  to="../../assets/cv/Sayed Asif Zayed - CV.pdf"
                  target="_blank"
                  download
                  className="lg:flex lg:items-center lg:justify-center"
                >
                  <button
                    className="py-1 w-full rounded-sm bg-[#E2A100]"
                    type="button"
                  >
                    DownLoad CV
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </ul>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:sticky lg:top-0 lg:z-[55] lg:h-24 lg:visible hidden">
        <NavHashLink
          smooth
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="lg:ml-[185px] lg:h-[h-24] text-white text-4xl font-bold"
        >
          <img className="w-24 lg:h-24 lg:w-[147px]" src={logo} alt="" />
        </NavHashLink>
      </div>
      <div className="lg:hidden block">
        <NavHashLink
          smooth
          className="lg:ml-[185px] lg:h-[h-24] text-white text-4xl font-bold"
        >
          <img className="w-24 lg:h-24 lg:w-[147px]" src={logo} alt="" />
        </NavHashLink>
      </div>
      <div className="hidden lg:flex ml-[165px]">
        <ul className="pl-[70px]">
          <div className="text-white">
            <ul className="flex gap-10 justify-center items-center text-[17px] font-bold">
              <li className="hover:text-[#00C4F0]">
                <NavHashLink
                  to="/"
                  smooth
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <div
                    className={`${
                      scrollPosition >= 0 &&
                      scrollPosition <= 705 &&
                      currentPath === "/" &&
                      currentPath !== "/blog"
                        ? "border-b-[3px] text-[#00C4F0] border-[#E2A100]"
                        : "border-none"
                    }`}
                  >
                    Home
                  </div>
                </NavHashLink>
              </li>
              <li className="hover:text-[#00C4F0]">
                <NavHashLink
                  smooth
                  to="/?experience"
                  onClick={() => {
                    window.scrollTo({ top: 940, behavior: "smooth" });
                  }}
                >
                  <div
                    className={`${
                      scrollPosition >= 706 && scrollPosition <= 1584
                        ? "border-b-[3px] text-[#00C4F0] border-[#E2A100]"
                        : "border-none"
                    }`}
                  >
                    Experience
                  </div>
                </NavHashLink>
              </li>
              <li className="hover:text-[#00C4F0]">
                <NavHashLink
                  to="/?about-me"
                  smooth
                  onClick={() => {
                    window.scrollTo({ top: 1886, behavior: "smooth" });
                  }}
                >
                  <div
                    className={`${
                      scrollPosition >= 1585 && scrollPosition <= 2640
                        ? "border-b-[3px] text-[#00C4F0] border-[#E2A100]"
                        : "border-none"
                    }`}
                  >
                    About Me
                  </div>
                </NavHashLink>
              </li>
              <li className="hover:text-[#00C4F0]">
                <NavHashLink
                  to="/?projects"
                  smooth
                  onClick={() => {
                    window.scrollTo({ top: 2895, behavior: "smooth" });
                  }}
                >
                  <div
                    className={`${
                      scrollPosition >= 2641 && scrollPosition <= 3643
                        ? "border-b-[3px] text-[#00C4F0] border-[#E2A100]"
                        : "border-none"
                    }`}
                  >
                    Projects
                  </div>
                </NavHashLink>
              </li>
              <li className="hover:text-[#00C4F0]">
                <NavHashLink
                  smooth
                  to="/blog"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "instant" });
                  }}
                >
                  <div
                    className={`${
                      scrollPosition >= 0 && currentPath === "/blog"
                        ? "border-b-[3px] text-[#00C4F0] border-[#E2A100]"
                        : "border-none"
                    }`}
                  >
                    Blogs
                  </div>
                </NavHashLink>
              </li>
              <li className="hover:text-[#00C4F0]">
                <NavHashLink
                  to="/?contact-me"
                  smooth
                  onClick={() => {
                    window.scrollTo({ top: 3835, behavior: "smooth" });
                  }}
                >
                  <div
                    className={`${
                      scrollPosition >= 3644
                        ? "border-b-[3px] text-[#00C4F0] border-[#E2A100]"
                        : "border-none"
                    }`}
                  >
                    Contact Me
                  </div>
                </NavHashLink>
              </li>
              <DownloadButton name="Download CV" />
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
