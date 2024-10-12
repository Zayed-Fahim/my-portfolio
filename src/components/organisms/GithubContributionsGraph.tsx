"use client";
import { getGitHubYears } from "@/helpers/calculateGithubYears";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { YearButton } from "../atoms";
import { Animation } from "../molecules";

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
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "Zayed-Fahim";
  const joinYear = Number(process.env.NEXT_PUBLIC_GITHUB_JOIN_YEAR);
  const years = getGitHubYears(joinYear);

  return (
    <div className="glow-border p-5" id="github-contributions">
      <Animation delay={0.16}>
        <h2 className="font-incognito text-4xl font-bold tracking-tight mb-8">
          Contrbution Graph
        </h2>
      </Animation>
      <Animation delay={0.16}>
        <div className="flex xl:flex-row flex-col gap-4">
          <div className="dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 p-8 rounded-lg max-w-full max-h-fit">
            <GitHubCalendar
              username={username}
              colorScheme={serverTheme}
              blockSize={14}
              year={calendarYear}
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
