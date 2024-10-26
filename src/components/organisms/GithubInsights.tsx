import "../../app/styles/gradientBorder.css";
import React from "react";
import { Animation, GithubContributionsGraph } from "../molecules";
import { OverViewCard } from "../atoms";
import Link from "next/link";
import { GitHub } from "@/constants";

const GithubInsights = () => {
  const contributions = [
    {
      count: 500,
      title: "Total",
    },
    {
      count: 15,
      title: "This Week",
    },
    {
      count: 20,
      title: "Best Day",
    },
    {
      count: 5,
      title: "Average(Per Day)",
    },
  ];

  const userData = [
    {
      title: "Stars",
      count: 0,
    },
    {
      title: "Followers",
      count: 1,
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <div>
          <Animation delay={0.2}>
            <div className="flex justify-start items-center gap-2 pb-1">
              <GitHub className="w-5 h-5 md:w-6 md:h-6" />
              <h1 className="text-xl md:text-2xl font-bold">GitHub Insights</h1>
            </div>
          </Animation>
          <Animation delay={0.2}>
            <div className="flex justify-between items-center">
              <p className="text-base md:text-xl font-thin">
                A quick look at followers, stars, and contributions activity.
              </p>
              <Link
                href="https://github.com/Zayed-Fahim"
                target="_blank"
                className="hover:text-secondary-color"
              >
                @Zayed-Fahim
              </Link>
            </div>
          </Animation>
        </div>
        <Animation delay={0.22}>
          <div className="flex gap-5">
            {userData.map(({ title, count }, i) => (
              <OverViewCard key={i}>
                <h1 className="text-base">{title}</h1>
                <p className="font-bold text-xl">{count}</p>
              </OverViewCard>
            ))}
          </div>
        </Animation>
      </div>
      <Animation delay={0.22}>
        <div className="glow-border p-6 rounded-xl">
          <p className="absolute -top-4 left-3 bg-white dark:bg-primary-bg px-2 text-2xl font-semibold">
            Contributions
          </p>
          <Animation delay={0.24}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pb-5">
              {contributions.map(({ title, count }, i) => (
                <OverViewCard key={i}>
                  <h1 className="text-base">{title}</h1>
                  <p className="font-bold text-xl">{count}</p>
                </OverViewCard>
              ))}
            </div>
          </Animation>
          <Animation delay={0.24}>
            <GithubContributionsGraph />
          </Animation>
        </div>
      </Animation>
    </div>
  );
};

export default GithubInsights;
