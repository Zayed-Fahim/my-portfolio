import React from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import Slider from "react-slick";
import { VscLiveShare, VscGithubInverted } from "react-icons/vsc";

const ProjectDetails = () => {
  const projectDetails = useLoaderData();

  const {
    websiteName,
    title,
    description,
    websiteFeatures,
    tools,
    websiteLink,
    serverSideLink,
    clientSideLink,
  } = projectDetails[0];

  const settings = {
    className: "center",
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
  };

  return (
    <div className="bg-[#18191A]">
      <div className="flex container mx-auto gap-5 pt-[140px] pb-10">
        <div className="lg:h-auto bg-[#242526] w-[60%] drop-shadow rounded-xl px-14 pb-5">
          <h1 className="relative left-[60px] -top-12 font-bold text-6xl italic py-3 bg-gradient-to-r from-[#00C4F0] to-[#E2A200] text-transparent bg-clip-text">
            {websiteName}_
          </h1>
          <div className="flex items-center justify-between">
            <h1 className="text-[#E7E9ED] text-2xl italic">
              <span className="text-2xl font-bold italic underline">
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
          <h1 className="text-[#E7E9ED] text-2xl font-bold italic mt-3 underline">
            Description:
          </h1>
          <p className="text-[#E7E9ED] text-[18px] mt-2">{description}</p>
          <h1 className="text-[#E7E9ED] text-2xl font-bold italic mt-3 underline">
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
          <h1 className="text-[#E7E9ED] text-2xl font-bold italic mt-3 mb-2 underline">
            Used Technology:
          </h1>
          <Slider {...settings}>
            {tools?.map((tool) => (
              <div key={tool?._id} className="flex h-[180px] relative">
                <img
                  alt={tool?.name}
                  title={tool?.name}
                  src={tool?.image}
                  className="h-[180px] relative left-2 p-5"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="bg-[#242526] lg:h-[600px] w-[40%] rounded-xl px-10">
          <div>
            <h1 className="relative left-[60px] -top-[44px] font-bold text-5xl italic py-3 bg-gradient-to-r from-[#00C4F0] to-[#E2A200] text-transparent bg-clip-text">
              Gallery_
            </h1>
            <div className="flex items-center justify-between text-[#E7E9ED] text-xl italic font-bold h-[30px]">
              <h1 className="underline">Photos</h1>
              <Link className="text-[#00C4F0] hover:underline">
                See All Photos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
