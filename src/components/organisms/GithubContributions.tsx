import "../../app/styles/gradientBorder.css";
import { Animation } from "@/components/molecules";
import Link from "next/link";
import dynamic from "next/dynamic";

const GithubContributionsGraph = dynamic(
  () => import("../molecules/GithubContributionsGraph")
);

const GithubContributions = () => {
  return (
    <div className="glow-border p-5" id="github-contributions">
      <Animation delay={0.16}>
        <div className="w-full flex justify-between items-center font-incognito mb-8">
          <h2 className="text-4xl font-bold tracking-tight">
            Contrbution Graph
          </h2>
          <Link
            className="font-bold hover:text-secondary-color text-[#a1a1aa]"
            href="https://github.com/Zayed-Fahim"
            target="_blank"
          >
            @Zayed-Fahim
          </Link>
        </div>
      </Animation>
      <Animation delay={0.16}>
        <GithubContributionsGraph />
      </Animation>
    </div>
  );
};

export default GithubContributions;
