import React from "react";
import { PageHeader } from "@/components/atoms";
import { Animation } from "@/components/molecules";
import Link from "next/link";
import { SiWakatime } from "react-icons/si";
import { WakaTimeActivities } from "@/components/organisms";

const WakaTime = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-y-10">
      <Animation delay={0.1} className="w-full">
        <PageHeader
          title="Insights"
          description={
            <span className="text-pretty">
              Discover a comprehensive overview of digital presence,
              encompassing coding insights, key metrics, and more,
              <br className="hidden md:block" />
              all conveniently in one place.
            </span>
          }
        />
      </Animation>

      <div className="w-full flex flex-col gap-5">
        <div>
          <Animation delay={0.12}>
            <div className="flex flex-row justify-between items-start pb-2 sm:pb-0">
              <div className="flex justify-start items-center gap-2 pb-1">
                <SiWakatime className="w-5 h-5 md:w-6 md:h-6" />
                <h1 className="text-xl md:text-2xl font-bold">
                  Weekly Coding Activities
                </h1>
              </div>
              <Link
                href="https://wakatime.com/@Zayed_Fahim"
                target="_blank"
                className="hover:text-secondary-color text-[#a1a1aa]"
              >
                @Zayed_Fahim
              </Link>
            </div>
          </Animation>
          <Animation delay={0.14}>
            <div className="flex justify-between items-center">
              <p className="text-base md:text-xl font-thin">
                My WakaTime last 7 days stats.
              </p>
              <p className="text-[#a1a1aa]">
                Updated: {process.env.NEXT_PUBLIC_LAST_UPDATED}
              </p>
            </div>
          </Animation>
        </div>

        <WakaTimeActivities />
      </div>
    </div>
  );
};

export default WakaTime;
