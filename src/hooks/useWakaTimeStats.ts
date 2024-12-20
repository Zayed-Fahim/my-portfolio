"use client";
import useSWR from "swr";
import { wakaTimeFetcher } from "./fetcher";

type WakaTimeStats = {
  grand_total: {
    total_seconds: number;
  };
  date: string;
  operating_systems: Array<{
    name: string;
    percent: number;
  }>;
  editors: Array<{
    name: string;
    percent: number;
  }>;
  languages: Array<{
    name: string;
    percent: number;
  }>;
};

type AllTimeStats = {
  data: {
    text: string;
  };
};

type SummaryResponse = {
  data: WakaTimeStats[];
};

type CodingStats = {
  dailyAverage: string;
  weeklyTotal: string;
  bestDayTime: string;
  allTimeTotal: string;
  operatingSystems: {
    name: string;
    percent: number;
  }[];
  editors: {
    name: string;
    percent: number;
  }[];
  languages: {
    name: string;
    percent: number;
  }[];
};

export const useWakaTimeStats = () => {
  const { data: summaryData, error: summaryError } = useSWR<SummaryResponse>(
    "https://wakatime.com/api/v1/users/current/summaries?range=last_7_days",
    wakaTimeFetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 60 * 60,
    }
  );

  const { data: allTimeData, error: allTimeError } = useSWR<AllTimeStats>(
    "https://wakatime.com/api/v1/users/current/all_time_since_today",
    wakaTimeFetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 60 * 60,
    }
  );

  if (summaryError || allTimeError) {
    return {
      isLoading: false,
      error: "Failed to fetch coding statistics",
      data: null,
    };
  }

  if (!summaryData || !allTimeData) {
    return {
      isLoading: true,
      error: null,
      data: null,
    };
  }

  const days = summaryData.data;
  let totalSeconds = 0;
  let bestDay = { date: "", total_seconds: 0 };

  days.forEach((day) => {
    totalSeconds += day.grand_total.total_seconds;
    if (day.grand_total.total_seconds > bestDay.total_seconds) {
      bestDay = {
        date: day.date,
        total_seconds: day.grand_total.total_seconds,
      };
    }
  });

  const averageSeconds = totalSeconds / days.length;
  const averageHours = Math.floor(averageSeconds / 3600);
  const averageMinutes = Math.floor((averageSeconds % 3600) / 60);
  const dailyAverage = `${averageHours}h ${averageMinutes}m`;

  const weeklyHours = Math.floor(totalSeconds / 3600);
  const weeklyMinutes = Math.floor((totalSeconds % 3600) / 60);
  const weeklyTotal = `${weeklyHours}h ${weeklyMinutes}m`;

  const bestDayHours = Math.floor(bestDay.total_seconds / 3600);
  const bestDayMinutes = Math.floor((bestDay.total_seconds % 3600) / 60);
  const bestDayTime = `${bestDayHours}h ${bestDayMinutes}m`;

  const lastDay = days[days.length - 1];

  const operatingSystems = lastDay.operating_systems.map((os) => ({
    name: os.name,
    percent: parseFloat(os.percent.toFixed(2)),
  }));

  const editors = lastDay.editors.map((editor) => ({
    name: editor.name,
    percent: parseFloat(editor.percent.toFixed(2)),
  }));

  const mainLanguages = ["TypeScript", "JavaScript"];
  let otherPercent = 0;

  const languages = lastDay.languages.reduce(
    (acc: CodingStats["languages"], lang) => {
      if (mainLanguages.includes(lang.name)) {
        acc.push({
          name: lang.name,
          percent: parseFloat(lang.percent.toFixed(2)),
        });
      } else {
        otherPercent += lang.percent;
      }
      return acc;
    },
    []
  );

  if (otherPercent > 0) {
    languages.push({
      name: "Others",
      percent: parseFloat(otherPercent.toFixed(2)),
    });
  }

  const processedData: CodingStats = {
    dailyAverage,
    weeklyTotal,
    bestDayTime,
    allTimeTotal: allTimeData.data.text,
    operatingSystems,
    editors,
    languages,
  };

  return {
    isLoading: false,
    error: null,
    data: processedData,
  };
};

export default useWakaTimeStats;
