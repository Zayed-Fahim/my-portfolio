import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div className="bg-gradient-to-r from-[#2C2C2C] to-[#1C1C1C] sticky top-0 z-[2]">
        <div className="container mx-auto navbar h-5">
          <div className="flex-1">
            <Link className="text-white text-4xl font-bold">
              <span className="text-[#00C4F0] font-bold">zayed</span>DEV
              <span className="font-bold text-7xl text-[#E2A300] absolute top-[-20px]">
                .
              </span>
            </Link>
          </div>
          <div className="text-white">
            <ul className="flex gap-12 text-[18px] font-bold">
              <li className="hover:text-[#00C4F0]">
                <Link>Home</Link>
              </li>
              <li className="hover:text-[#00C4F0]">
                <Link>About me</Link>
              </li>
              <li className="hover:text-[#00C4F0]">
                <Link>Projects</Link>
              </li>
              <li className="hover:text-[#00C4F0]">
                <Link>Blogs</Link>
              </li>
              <li className="hover:text-[#00C4F0]">
                <Link>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="pl-12">
            <button className="text-black h-[40px] px-10 font-bold bg-gradient-to-r from-[#E2A300] to-[#E29500] rounded-[6px] shadow-[0_2px_13px_rgba(226,158,0,0.48)]">
              Download CV
            </button>
          </div>
        </div>
      </div>
    );
};

export default Navbar;