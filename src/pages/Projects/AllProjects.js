import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    fetch("https://zayed-fahim-portfolio.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data.payload));
  }, [setProjects]);

  return (
    <div className="bg-no-repeat object-contain lg:object-cover mt-[63px] bg-center bg-fixed bg-black bg-opacity-80 bg-blend-color-burn min-h-full lg:w-[100%] bg-[url('/src/assets/background/project-background.gif')]">
      <div className="bg-[hsla(0,0%,0%,.1)] min-h-screen w-[100%]">
        <h1 className="text-white text-center border-b w-[100%] py-5 text-3xl lg:text-4xl font-extrabold drop-shadow-lg fixed z-[50] bg-[#2E2E2E] italic">
          Projects Gallery
        </h1>
        <div class="h-full z-0 scroll-smooth">
          <div class="container mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-3 h-full pb-10 lg:pb-20">
              <Link
                to={`/projects/${projects[0]?.projectID}/${projects[0]?.websiteName}`}
                class="border-r border-gray-300 mx-3 lg:mt-[80px] lg:pl-16"
                onClick={scrollToTop}
              >
                <div class=" py-10 pb-3 mt-28 lg:mt-72 h-[465px] lg:h-[480px] relative bg-purple-100 group hover:bg-purple-200 cursor-pointer transition ease-out duration-300">
                  <div>
                    <div class="w-4 h-1/5 absolute right-0 -top-48 bg-purple-100 group-hover:bg-purple-50 hidden lg:block cursor-not-allowed"></div>
                    <img
                      className="lg:h-[250px] h-[200px] w-full"
                      src={projects[0]?.websiteCover}
                      alt={projects[0]?.websiteName}
                    />
                  </div>
                  <div class="px-7 mt-20">
                    <h1 class="text-3xl font-bold group-hover:text-purple-300 transition ease-out duration-300">
                      0{projects[0]?.projectID}.
                    </h1>
                    <h2 class="text-1xl mt-4 font-bold">
                      {projects[0]?.title}
                    </h2>
                  </div>
                </div>
              </Link>
              <Link
                to={`/projects/${projects[1]?.projectID}/${projects[1]?.websiteName}`}
                class="border-r border-gray-300 mx-3 lg:mt-[145px] lg:pl-16"
                onClick={scrollToTop}
              >
                <div class=" py-10 pb-3 mt-10 lg:mt-32 h-[435px] lg:h-[480px] relative bg-indigo-100 group hover:bg-indigo-200 cursor-pointer transition ease-out duration-300 ">
                  <div>
                    <div class="w-4 h-1/5	absolute right-0 -top-48 bg-indigo-100  group-hover:bg-indigo-50 hidden lg:block cursor-not-allowed"></div>
                    <img
                      className="lg:h-[250px] h-[200px] w-full"
                      src={projects[1]?.websiteCover}
                      alt={projects[1]?.websiteName}
                    />
                  </div>
                  <div class="px-7 mt-20">
                    <h1 class="text-3xl font-bold group-hover:text-purple-300 transition ease-out duration-300">
                      0{projects[1]?.projectID}.
                    </h1>
                    <h2 class="text-1xl mt-4 font-bold">
                      {projects[1]?.title}
                    </h2>
                  </div>
                </div>
              </Link>
              <Link
                class="border-r border-gray-300 mx-3 lg:pl-16 lg:mt-[80px]"
                onClick={scrollToTop}
              >
                <div class=" py-10 pb-3 mt-10 lg:mt-5 h-[430px] lg:h-[480px] relative bg-red-100 group hover:bg-red-200 cursor-pointer transition ease-out duration-300">
                  <div>
                    <div class="w-4 h-1/5	absolute right-0 -bottom-44 bg-red-100 group-hover:bg-red-50 hidden lg:block cursor-not-allowed"></div>
                    <img
                      className="lg:h-[250px] h-[200px] w-full"
                      src="https://i.ibb.co/MgnH44p/pngegg-2.png"
                      alt="https://www.pngegg.com/en/png-epwii/download"
                    />
                  </div>
                  <div class="px-7 mt-5">
                    <h1 class="text-3xl font-bold group-hover:text-red-300 transition ease-out duration-300">
                      03.
                    </h1>
                    <h2 class="text-1xl mt-4 font-bold">Scandinavia Couch</h2>
                  </div>
                </div>
              </Link>
              <Link
                class="border-r border-gray-300 mx-3 lg:pl-16"
                onClick={scrollToTop}
              >
                <div class=" py-10 pb-3 mt-10 lg:mt-72 h-[430px] lg:h-[480px] relative bg-purple-100 group hover:bg-purple-200 cursor-pointer transition ease-out duration-300">
                  <div>
                    <div class="w-4 h-1/5 absolute right-0 -top-48 bg-purple-100 group-hover:bg-purple-50 hidden lg:block cursor-not-allowed"></div>
                    <img
                      className="lg:h-[250px] h-[200px] w-full"
                      src="https://i.ibb.co/FzkhpcD/pngegg.png"
                      alt="https://www.pngegg.com/en/png-nllal/download"
                    />
                  </div>
                  <div class="px-7 mt-20">
                    <h1 class="text-3xl font-bold group-hover:text-purple-300 transition ease-out duration-300">
                      04.
                    </h1>
                    <h2 class="text-1xl mt-4 font-bold">Roof light lamp</h2>
                  </div>
                </div>
              </Link>
              <Link
                class="border-r border-gray-300 mx-3 lg:mt-[62px] lg:pl-16"
                onClick={scrollToTop}
              >
                <div class=" py-10  pb-3 mt-10 lg:mt-28 h-[430px] lg:h-[480px] relative bg-indigo-100 group hover:bg-indigo-200 cursor-pointer transition ease-out duration-300">
                  <div>
                    <div class="w-4 h-1/5	absolute right-0 -top-48 bg-indigo-100  group-hover:bg-indigo-50 hidden lg:block cursor-not-allowed"></div>
                    <img
                      className="lg:h-[250px] h-[200px] w-full"
                      src="https://i.ibb.co/JB4GWMJ/pngegg-1.png"
                      alt="https://www.pngegg.com/en/png-zquqj/download"
                    />
                  </div>
                  <div class="px-7 mt-20">
                    <h1 class="text-3xl font-bold group-hover:text-indigo-300 transition ease-out duration-300">
                      05.
                    </h1>
                    <h2 class="text-1xl mt-4 font-bold">Lounge Chair</h2>
                  </div>
                </div>
              </Link>
              <Link
                class="border-r border-gray-300 mx-3 lg:pl-16"
                onClick={scrollToTop}
              >
                <div class=" py-10 pb-3 mt-10 lg:mt-5 h-[430px] lg:h-[480px] relative bg-red-100 group hover:bg-red-200 cursor-pointer transition ease-out duration-300">
                  <div>
                    <div class="w-4 h-1/5	absolute right-0 -bottom-44 bg-red-100 group-hover:bg-red-50 hidden lg:block cursor-not-allowed"></div>
                    <img
                      className="lg:h-[250px] h-[200px] w-full"
                      src="https://i.ibb.co/MgnH44p/pngegg-2.png"
                      alt="https://www.pngegg.com/en/png-epwii/download"
                    />
                  </div>
                  <div class="px-7 mt-5">
                    <h1 class="text-3xl font-bold group-hover:text-red-300 transition ease-out duration-300">
                      06.
                    </h1>
                    <h2 class="text-1xl mt-4 font-bold">Scandinavia Couch</h2>
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
