import React from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import Slider from "react-slick";
import { VscLiveShare, VscGithubInverted } from "react-icons/vsc";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useEffect } from "react";
import { useState } from "react";
import ProjectLoader from "../Components/ProjectLoader";

const ProjectDetails = () => {
  const projectDetails = useLoaderData();

  const {
    projectID,
    websiteName,
    title,
    description,
    websiteFeatures,
    tools,
    websiteLink,
    serverSideLink,
    clientSideLink,
    featuredPhotos,
    websitePrimaryColor,
  } = projectDetails[0];

  const [isReady, setIsReady] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsReady(false);
    }, 1500);
  }, []);

  const settings = {
    centerMode: true,
    infinite: true,
    autoPlay: true,
    pauseOnHover: true,
    slidesToShow: 1,
    speed: 500,
    rows: 1,
    arrows: false,
    slidesPerRow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    initialSlide: 0,
  };

  const websiteNameStyle = {
    background: `linear-gradient(to right, ${websitePrimaryColor[0].colorCode}, ${websitePrimaryColor[1].colorCode})`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };

  return isReady ? (
    <ProjectLoader />
  ) : (
    <div className="bg-[#18191A]">
      <div className="flex lg:flex-row flex-col container mx-5 lg:mx-auto gap-20 lg:gap-5 pt-[140px] pb-10">
        <div className="lg:h-auto bg-[#242526] lg:w-[60%] w-[91%] drop-shadow rounded-xl px-5 lg:px-14 lg:pb-5">
          <h1
            className="relative left-[40px] lg:left-[60px] -top-12 font-bold text-5xl lg:text-6xl italic py-3"
            style={websiteNameStyle}
          >
            {websiteName}_
          </h1>
          <div className="flex items-center justify-between">
            <h1 className="text-[#E7E9ED] text-xl lg:text-2xl italic">
              <span className="text-xl lg:text-2xl font-bold italic underline">
                Title:
              </span>{" "}
              {title}.
            </h1>
            <div className="flex items-center gap-5">
              <a
                href={websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Site"
              >
                <VscLiveShare className="text-[#E2A100]" size={25} />
              </a>
              <a
                href={clientSideLink}
                target="_blank"
                rel="noopener noreferrer"
                title="Client Side"
              >
                <VscGithubInverted className="text-[#E2A100]" size={25} />
              </a>
              <a
                href={serverSideLink}
                target="_blank"
                rel="noopener noreferrer"
                title="Server Side"
              >
                <VscGithubInverted className="text-[#E2A100]" size={25} />
              </a>
            </div>
          </div>
          <h1 className="text-[#E7E9ED] text-xl lg:text-2xl font-bold italic mt-3 underline">
            Description:
          </h1>
          <p className="text-[#E7E9ED] text-[18px] mt-2">{description}</p>
          <h1 className="text-[#E7E9ED] text-xl lg:text-2xl font-bold italic mt-3 underline">
            Features:
          </h1>
          {websiteFeatures?.map((feature) => (
            <ul
              key={feature?._id}
              style={{ listStyleType: "disc" }}
              className="text-[#E7E9ED] text-[18px] mt-2 pl-12"
            >
              <li>{feature.feature}</li>
            </ul>
          ))}
          <h1 className="text-[#E7E9ED] text-xl lg:text-2xl font-bold italic mt-3 mb-2 underline">
            Used Technology:
          </h1>
          <Slider {...settings}>
            {tools?.map((tool) => (
              <div key={tool?._id} className="flex lg:h-[180px] relative">
                <img
                  alt={tool?.name}
                  title={tool?.name}
                  src={tool?.image}
                  className="lg:h-[180px] relative left-2 p-5"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="bg-[#242526] lg:h-[500px] lg:w-[40%] w-[91%] rounded-xl px-5 lg:px-10 ">
          <div>
            <h1
              className="relative left-[60px] -top-[44px] font-bold text-5xl italic py-3"
              style={websiteNameStyle}
            >
              Photos_
            </h1>
            <div className="flex items-center justify-between text-[#E7E9ED] italic font-bold h-[30px]">
              <h1 className="underline">Featured Photos</h1>
              <Link
                to={`/projects/${projectID}/${websiteName}/media`}
                className="text-[#00C4F0] hover:underline"
              >
                See All Photos
              </Link>
            </div>
          </div>
          <div className="rounded grid grid-cols-2 gap-3 pb-5 lg:pb-0 mt-10 items-center justify-center">
            <PhotoProvider
              speed={() => 800}
              easing={(type) =>
                type === 2
                  ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                  : "cubic-bezier(0.34, 1.56, 0.64, 1)"
              }
            >
              {featuredPhotos?.map((featuredPhoto) => (
                <PhotoView src={featuredPhoto?.image} key={featuredPhoto?._id}>
                  <img
                    alt={featuredPhoto?.title}
                    src={featuredPhoto?.image}
                    className="h-auto lg:h-[150px] rounded-xl drop-shadow-2xl cursor-pointer"
                  />
                </PhotoView>
              ))}
            </PhotoProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
