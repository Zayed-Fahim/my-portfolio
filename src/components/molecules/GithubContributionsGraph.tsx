"use client";
import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { YearButton } from "@/components/atoms";
import { useTheme } from "next-themes";
import { getGitHubYears } from "@/helpers/calculateGithubYears";

const GithubContributionsGraph = () => {
  const { theme, systemTheme } = useTheme();
  const [serverTheme, setServerTheme] = useState<"light" | "dark" | undefined>(
    undefined
  );
  const scheme =
    theme === "light" ? "light" : theme === "dark" ? "dark" : systemTheme;

  useEffect(() => {
    setServerTheme(scheme);
  }, [scheme]);

  const [calendarYear, setCalendarYear] = useState<number | undefined>(
    undefined
  );

  const today = new Date().getFullYear();
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME as string;
  const joinYear = Number(process.env.NEXT_PUBLIC_GITHUB_JOIN_YEAR);
  const years = getGitHubYears(joinYear);

  return (
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
  );
};

export default GithubContributionsGraph;
