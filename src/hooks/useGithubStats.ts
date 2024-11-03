"use client";
import useSWR from "swr";
import { githubFetcher } from "./fetcher";

interface Contribution {
  date: string;
  count: number;
  level: number;
}

interface YearlyTotal {
  [key: string]: number;
}

interface ContributionsData {
  total: YearlyTotal;
  contributions: Contribution[];
}

interface StarData {
  stars: number;
  forks: number;
}

interface UserData {
  followers: number;
  following: number;
  public_repos: number;
}

interface GitHubStats {
  totalContributions: number;
  lastSevenDaysContributions: number;
  highestDailyContribution: number;
  averageDailyContribution: number;
  followers: number;
  stars: number;
  isLoading: boolean;
  error: Error | null;
}

const ONE_HOUR = 3600000;

const calculateStats = (
  contributionsData: ContributionsData,
  starData: StarData,
  userData: UserData
): Omit<GitHubStats, "isLoading" | "error"> => {
  const totalContributions = Object.values(contributionsData.total).reduce(
    (sum, count) => sum + count,
    0
  );

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  sevenDaysAgo.setHours(0, 0, 0, 0);

  const lastSevenDaysContributions = contributionsData.contributions
    .filter((contrib) => new Date(contrib.date) >= sevenDaysAgo)
    .reduce((sum, contrib) => sum + contrib.count, 0);

  const highestDailyContribution = Math.max(
    ...contributionsData.contributions.map((contrib) => contrib.count)
  );

  const totalDays = contributionsData.contributions.length;
  const totalCount = contributionsData.contributions.reduce(
    (sum, contrib) => sum + contrib.count,
    0
  );
  const averageDailyContribution =
    totalDays > 0 ? Number(Math.ceil(totalCount / totalDays)) : 0;

  return {
    totalContributions,
    lastSevenDaysContributions,
    highestDailyContribution,
    averageDailyContribution,
    followers: userData.followers,
    stars: starData.stars,
  };
};

export function useGithubStats(username: string): GitHubStats {
  const {
    data: contributionsData,
    error: contributionsError,
    isLoading: contributionsLoading,
  } = useSWR<ContributionsData>(
    `https://github-contributions-api.jogruber.de/v4/${username}`,
    githubFetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: ONE_HOUR,
      dedupingInterval: ONE_HOUR,
    }
  );

  const {
    data: starData,
    error: starError,
    isLoading: starLoading,
  } = useSWR<StarData>(
    `https://api.github-star-counter.workers.dev/user/${username}`,
    githubFetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: ONE_HOUR,
      dedupingInterval: ONE_HOUR,
    }
  );

  const {
    data: userData,
    error: userError,
    isLoading: userLoading,
  } = useSWR<UserData>(
    `https://api.github.com/users/${username}`,
    githubFetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: ONE_HOUR,
      dedupingInterval: ONE_HOUR,
    }
  );

  const isLoading = contributionsLoading || starLoading || userLoading;
  const error = contributionsError || starError || userError;

  if (error) {
    return {
      totalContributions: 0,
      lastSevenDaysContributions: 0,
      highestDailyContribution: 0,
      averageDailyContribution: 0,
      followers: 0,
      stars: 0,
      isLoading: false,
      error,
    };
  }

  if (isLoading || !contributionsData || !starData || !userData) {
    return {
      totalContributions: 0,
      lastSevenDaysContributions: 0,
      highestDailyContribution: 0,
      averageDailyContribution: 0,
      followers: 0,
      stars: 0,
      isLoading: true,
      error: null,
    };
  }

  return {
    ...calculateStats(contributionsData, starData, userData),
    isLoading: false,
    error: null,
  };
}

export default useGithubStats;
