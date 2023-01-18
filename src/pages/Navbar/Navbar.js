import React from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import logo from "../../assets/icon/navLogo.png";

const Navbar = () => {
  return (
    <div className="navbar h-[64px] bg-gradient-to-r from-[#2C2C2C] to-[#1C1C1C] sticky top-0 z-[12]">
      <div className="sticky top-0 z-[100]">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
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
              <ul className="flex flex-col gap-4 p-3 text-[18px] font-bold bg-gradient-to-r from-[#2C2C2C] to-[#1C1C1C]">
                <li className="hover:text-[#00C4F0]">
                  <NavHashLink smooth to="home/#root">
                    Home
                  </NavHashLink>
                </li>
                <li className="hover:text-[#00C4F0]">
                  <NavHashLink smooth to="home/#experience">
                    Experience
                  </NavHashLink>
                </li>
                <li className="hover:text-[#00C4F0]">
                  <NavHashLink smooth to="home/#about-me">
                    About me
                  </NavHashLink>
                </li>
                <li className="hover:text-[#00C4F0]">
                  <NavHashLink smooth to="home/#projects">
                    Projects
                  </NavHashLink>
                </li>
                <li className="hover:text-[#00C4F0]">
                  <NavHashLink smooth to="/blog">
                    Blogs
                  </NavHashLink>
                </li>
                <li className="hover:text-[#00C4F0]">
                  <NavHashLink smooth to="home/#contact">
                    Contact
                  </NavHashLink>
                </li>
                <li>
                  <Link
                    to="../../assets/cv/Sayed Asif Zayed.pdf"
                    target="_blank"
                    download
                    className=""
                  >
                    <button className="text-black lg:h-[40px] h-[30px] px-4 lg:px-10 text-sm font-bold bg-gradient-to-r from-[#E2A300] to-[#E29500] rounded-[6px] shadow-[0_2px_13px_rgba(226,158,0,0.48)]">
                      Download CV
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>
        <div className="lg:grid lg:grid-cols-2">
          <NavHashLink
            smooth
            to="/home#"
            className="lg:ml-[183px] text-white text-4xl font-bold"
          >
            <img className="w-24 lg:h-36 lg:w-36" src={logo} alt="" />
          </NavHashLink>
        </div>
      </div>
      <div className="hidden lg:flex ml-[175px]">
        <ul className="px-10">
          <div className="text-white">
            <ul className="flex gap-10 justify-center items-center text-[18px] font-bold">
              <li className="hover:text-[#00C4F0]">
                <NavHashLink smooth to="home/#root">
                  Home
                </NavHashLink>
              </li>
              <li className="hover:text-[#00C4F0]">
                <NavHashLink smooth to="home/#experience">
                  Experience
                </NavHashLink>
              </li>
              <li className="hover:text-[#00C4F0]">
                <NavHashLink smooth to="home/#about-me">
                  About me
                </NavHashLink>
              </li>
              <li className="hover:text-[#00C4F0]">
                <NavHashLink smooth to="home/#projects">
                  Projects
                </NavHashLink>
              </li>
              <li className="hover:text-[#00C4F0]">
                <NavHashLink smooth to="/blog">
                  Blogs
                </NavHashLink>
              </li>
              <li className="hover:text-[#00C4F0]">
                <NavHashLink smooth to="home/#contact">
                  Contact
                </NavHashLink>
              </li>
              <li>
                <Link
                  to="../../assets/cv/Sayed Asif Zayed.pdf"
                  target="_blank"
                  download
                  className="lg:flex lg:items-center lg:justify-center"
                >
                  <button className="text-black lg:h-[40px] h-[30px] px-4 lg:px-10 font-bold bg-gradient-to-r from-[#E2A300] to-[#E29500] rounded-[6px] shadow-[0_2px_13px_rgba(226,158,0,0.48)]">
                    Download CV
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </ul>
      </div>
      {/* <div className="navbar-end"></div> */}
    </div>
  );
};

export default Navbar;
