import React from "react";
import { Link } from "react-router-dom";

const AllProjects = ({ projects }) => {
  return (
    <div className="bg-no-repeat object-cover lg:object-contain mt-[63px] bg-center bg-fixed bg-black bg-opacity-80 min-h-[100vh] w-[100%] bg-[url('/src/assets/background/project-background.gif')]">
      <div className="bg-[hsla(0,0%,0%,.1)] min-h-screen w-[100%]">
        <h1 className="text-white text-center border-b w-[100%] lg:py-5 lg:text-4xl font-bold drop-shadow-lg fixed z-[100] bg-[#2E2E2E]">
          Projects Gallery
        </h1>
        <div className="h-full scroll-smooth">
          <div className="container mx-auto z-0">
            <div className="grid lg:grid-cols-3 grid-cols-1 h-full pb-40">
              <Link
                to={`/projects/${projects[0]?.projectID}/${projects[0]?.websiteName}`}
                className="border-r border-gray-300 mx-3 lg:pl-20"
              >
                <div className=" py-10 pb-3 mt-72 h-4/6 relative bg-purple-100 group hover:bg-purple-200 cursor-pointer transition ease-out duration-300">
                  <div>
                    <div className="w-4 h-1/5 absolute right-0 -top-48 bg-purple-100 group-hover:bg-purple-50"></div>
                    <img
                      className="h-[200px] w-full"
                      src={projects[0]?.websiteCover}
                      alt={projects[0]?.websiteName}
                    />
                  </div>
                  <div className="px-7 mt-20">
                    <h1 className="text-3xl font-bold group-hover:text-purple-300 transition ease-out duration-300">
                      0{projects[0]?.projectID}
                    </h1>
                    <h2 className="text-2xl mt-4 font-bold">
                      {projects[0]?.websiteName}
                    </h2>
                  </div>
                </div>
              </Link>
              <Link
                to={`/projects/${projects[1]?.projectID}/${projects[1]?.websiteName}`}
                className="border-r border-gray-300 mx-3 lg:pl-20"
              >
                <div className=" py-10  pb-3 mt-32 h-4/6 relative bg-indigo-100 group hover:bg-indigo-200 cursor-pointer transition ease-out duration-300">
                  <div>
                    <div className="w-4 h-1/5 	absolute right-0 -top-48 bg-indigo-100  group-hover:bg-indigo-50"></div>
                    <img
                      className="h-[200px] w-full"
                      src={projects[1]?.websiteCover}
                      alt={projects[1]?.websiteName}
                    />
                  </div>
                  <div className="px-7 mt-20">
                    <h1 className="text-3xl font-bold group-hover:text-purple-300 transition ease-out duration-300">
                      0{projects[1]?.projectID}
                    </h1>
                    <h2 className="text-2xl mt-4 font-bold">
                      {projects[1]?.websiteName}
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
