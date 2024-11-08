"use client";
import "@/app/styles/gradientBorder.css";
import { GitHub } from "@/constants";
import { useGithubStats } from "@/hooks/useGithubStats";
import Link from "next/link";
import { OverViewCard } from "@/components/atoms";
import { IncrementCounter } from "@/components/atoms";
import { Animation, GithubContributionsGraph } from "@/components/molecules";

const GithubInsights = () => {
  const {
    totalContributions,
    lastSevenDaysContributions,
    highestDailyContribution,
    averageDailyContribution,
    followers,
    stars,
    isLoading,
    error,
  } = useGithubStats(process.env.NEXT_PUBLIC_GITHUB_USERNAME as string);

  const contributions = [
    {
      title: "Total",
      count: isLoading ? "..." : totalContributions,
    },
    {
      title: "This Week",
      count: isLoading ? "..." : lastSevenDaysContributions,
    },
    {
      title: "Best Day",
      count: isLoading ? "..." : highestDailyContribution,
    },
    {
      title: "Average(Per Day)",
      count: isLoading ? "..." : averageDailyContribution,
    },
  ];

  const userData = [
    {
      title: "Stars",
      count: isLoading ? "..." : stars,
    },
    {
      title: "Followers",
      count: isLoading ? "..." : followers,
    },
  ];

  if (error) {
    return <div>Error loading GitHub data</div>;
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <div>
          <Animation delay={0.2}>
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-center gap-2 pb-1">
                <GitHub className="w-5 h-5 md:w-6 md:h-6" />
                <h1 className="text-xl md:text-2xl font-bold">
                  GitHub Insights
                </h1>
              </div>
              <Link
                href="https://github.com/Zayed-Fahim"
                target="_blank"
                className="hover:text-secondary-color text-[#a1a1aa]"
              >
                @Zayed-Fahim
              </Link>
            </div>
          </Animation>
          <Animation delay={0.2}>
            <p className="text-base md:text-xl font-thin">
              A quick look at followers, stars, and contributions activity.
            </p>
          </Animation>
        </div>
        <Animation delay={0.22}>
          <div className="flex gap-5">
            {userData.map(({ title, count }, i) => (
              <OverViewCard key={i}>
                <h1 className="text-base">{title}</h1>
                <p className="font-bold text-xl">
                  {typeof count === "number" ? (
                    <IncrementCounter to={count} />
                  ) : (
                    count
                  )}
                </p>
              </OverViewCard>
            ))}
          </div>
        </Animation>
      </div>
      <Animation delay={0.22}>
        <div className="glow-border p-6 rounded-xl">
          <p className="absolute -top-4 left-3 bg-white dark:bg-black px-2 text-2xl font-semibold">
            Contributions
          </p>
          <Animation delay={0.24}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pb-5">
              {contributions.map(({ title, count }, i) => (
                <OverViewCard key={i}>
                  <h1 className="text-base">{title}</h1>
                  {typeof count === "number" ? (
                    <IncrementCounter to={count} />
                  ) : (
                    count
                  )}
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
