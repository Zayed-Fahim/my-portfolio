import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div className="navbar h-5 border-4">
        <div className="flex-1">
          <Link className="text-black text-4xl font-bold">zayedDEV.</Link>
        </div>
        <div className="text-black">
          <ul className="flex gap-12 text-[20px] font-bold">
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
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="pl-12">
          <button className="text-black h-[40px] px-10 font-bold bg-gradient-to-r from-[#E2A300] to-[#E29500] rounded-[6px]">
            Download CV
          </button>
        </div>
      </div>
    );
};

export default Navbar;