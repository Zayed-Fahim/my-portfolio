"use client";
import useSWR from "swr";

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

interface GitHubStats {
  totalContributions: number;
  lastSevenDaysContributions: number;
  highestDailyContribution: number;
  averageDailyContribution: number;
  isLoading: boolean;
  error: Error | null;
}

const ONE_HOUR = 3600000; // 1 hour in milliseconds

const fetcher = async (url: string): Promise<ContributionsData> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch GitHub contributions");
  }
  return response.json();
};

const calculateStats = (
  data: ContributionsData
): Omit<GitHubStats, "isLoading" | "error"> => {
  // Calculate total contributions
  const totalContributions = Object.values(data.total).reduce(
    (sum, count) => sum + count,
    0
  );

  // Calculate last 7 days contributions
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  sevenDaysAgo.setHours(0, 0, 0, 0);

  const lastSevenDaysContributions = data.contributions
    .filter((contrib) => new Date(contrib.date) >= sevenDaysAgo)
    .reduce((sum, contrib) => sum + contrib.count, 0);

  // Find highest contribution in a single day
  const highestDailyContribution = Math.max(
    ...data.contributions.map((contrib) => contrib.count)
  );

  // Calculate average daily contribution
  const totalDays = data.contributions.length;
  const totalCount = data.contributions.reduce(
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
  };
};

export function useGithubStats(username: string): GitHubStats {
  const { data, error, isLoading } = useSWR<ContributionsData>(
    `https://github-contributions-api.jogruber.de/v4/${username}`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: ONE_HOUR,
      dedupingInterval: ONE_HOUR,
    }
  );

  if (error) {
    return {
      totalContributions: 0,
      lastSevenDaysContributions: 0,
      highestDailyContribution: 0,
      averageDailyContribution: 0,
      isLoading: false,
      error,
    };
  }

  if (isLoading || !data) {
    return {
      totalContributions: 0,
      lastSevenDaysContributions: 0,
      highestDailyContribution: 0,
      averageDailyContribution: 0,
      isLoading: true,
      error: null,
    };
  }

  return {
    ...calculateStats(data),
    isLoading: false,
    error: null,
  };
}
