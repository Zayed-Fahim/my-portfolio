import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";
import MediaLoader from "../Components/MediaLoader";

const ProjectMedia = () => {
  const projectMedias = useLoaderData();
  const [isReady, setIsReady] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsReady(false);
    }, 1500);
  }, []);

  return isReady ? (
    <MediaLoader />
  ) : (
    <div className="bg-[#18191A] lg:pt-[150px] pb-10 pt-[130px] lg:pb-14">
      <div className="h-auto rounded-xl bg-[#242526] mx-5 lg:mx-96">
        <h1 className="relative left-[60px] lg:left-[120px] -top-[45px] lg:-top-[60px] font-bold text-5xl lg:text-7xl italic py-3 bg-gradient-to-r from-[#E2A200] to-[#00C4F0] text-transparent bg-clip-text">
          Gallery_
        </h1>
        <div className="px-5 lg:px-10 pb-5 lg:pb-10 grid grid-cols-2 lg:grid-cols-3 gap-5">
          <PhotoProvider
            speed={() => 800}
            easing={(type) =>
              type === 2
                ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                : "cubic-bezier(0.34, 1.56, 0.64, 1)"
            }
          >
            {projectMedias[0].photos?.map((photo) => (
              <PhotoView key={photo?._id} src={photo?.image}>
                <img
                  alt={photo?.title}
                  src={photo?.image}
                  className="h-auto lg:h-[200px] rounded-xl drop-shadow-2xl cursor-pointer"
                />
              </PhotoView>
            ))}
          </PhotoProvider>
        </div>
      </div>
    </div>
  );
};

export default ProjectMedia;
