"use client";
import { YearButton } from "@/components/atoms";
import { Animation } from "@/components/molecules";
import configuration from "@/configuration";
import { getGitHubYears } from "@/helpers/calculateGithubYears";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";

const GithubContributionsGraph = () => {
  const [calendarYear, setCalendarYear] = useState<number | undefined>(
    undefined
  );
  const { theme, systemTheme } = useTheme();
  const [serverTheme, setServerTheme] = useState<"light" | "dark" | undefined>(
    undefined
  );
  const scheme =
    theme === "light" ? "light" : theme === "dark" ? "dark" : systemTheme;

  useEffect(() => {
    setServerTheme(scheme);
  }, [scheme]);

  const today = new Date().getFullYear();
  const username = configuration.githubUsername || "Zayed-Fahim";
  const joinYear = Number(configuration.githubJoinYear) || 2020;
  const years = getGitHubYears(joinYear);

  return (
    <div className="glow-border p-5" id="github-contributions">
      <Animation delay={0.16}>
        <div className="w-full flex justify-between items-center font-incognito mb-8">
          <h2 className="text-4xl font-bold tracking-tight">
            Contrbution Graph
          </h2>
          <Link
            className="md:text-xl font-bold hover:text-secondary-color"
            href="https://github.com/Zayed-Fahim"
            target="_blank"
          >
            @Zayed-Fahim
          </Link>
        </div>
      </Animation>
      <Animation delay={0.16}>
        <div className="flex xl:flex-row flex-col gap-4">
          <div className="dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 p-8 rounded-lg max-w-full max-h-fit">
            <GitHubCalendar
              username={username}
              colorScheme={serverTheme}
              blockSize={14}
              year={calendarYear}
              style={{ cursor: "pointer" }}
              renderBlock={(block, activity) =>
                React.cloneElement(block, {
                  "data-tooltip-id": "react-tooltip",
                  "data-tooltip-html": `${activity.count} activities on ${activity.date}`,
                })
              }
            />
            <ReactTooltip
              id="react-tooltip"
              className="dark:bg-[#202023] z-[9999]"
            />
          </div>
          <div className="flex justify-start xl:flex-col flex-row flex-wrap gap-2">
            {years.slice(0, 5).map((year) => (
              <YearButton
                key={year}
                year={year}
                currentYear={calendarYear ?? today}
                onClick={() =>
                  setCalendarYear(year === calendarYear ? undefined : year)
                }
              />
            ))}
          </div>
        </div>
      </Animation>
    </div>
  );
};

export default GithubContributionsGraph;
