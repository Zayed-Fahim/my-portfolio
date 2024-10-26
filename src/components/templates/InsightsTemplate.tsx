import React from "react";
import { WakaTime } from "@/components/organisms";
import GithubInsights from "../organisms/GithubInsights";

const InsightsTemplate = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16 font-incognito">
      <div className="flex flex-col gap-10">
        <WakaTime />
        <GithubInsights />
      </div>
    </div>
  );
};

export default InsightsTemplate;
