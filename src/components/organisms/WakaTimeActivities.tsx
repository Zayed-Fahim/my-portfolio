"use client";
import { useWakaTimeStats } from "@/hooks/useWakaTimeStats";
import "../../app/styles/gradientBorder.css";
import { OverViewCard } from "../atoms";
import Progress from "../atoms/ProgressBar";
import { Animation } from "../molecules";

const WakaTimeActivities = () => {
  const { data, isLoading, error } = useWakaTimeStats();

  console.log({ error });

  const activities = [
    {
      title: "Daily Coding Average",
      count: isLoading ? "..." : data?.dailyAverage,
    },
    {
      title: "This Week Coding Time",
      count: isLoading ? "..." : data?.weeklyTotal,
    },
    {
      title: "Best Day Coding Time",
      count: isLoading ? "..." : data?.bestDayTime,
    },
    {
      title: "All Time Coding Time",
      count: isLoading ? "..." : data?.allTimeTotal,
    },
  ];

  const others = [
    {
      name: data?.editors[0].name,
      percent: data?.editors[0].percent,
    },
    {
      name: data?.operatingSystems[0].name,
      percent: data?.operatingSystems[0].percent,
    },
  ];

  if (error) {
    return <div>Error loading WakaTime data</div>;
  }

  return (
    <div className="w-full flex flex-col gap-5">
      <Animation delay={0.16}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {activities.map(({ title, count }, i) => (
            <OverViewCard key={i}>
              <h1 className="text-base">{title}</h1>
              <p className="font-bold text-xl">{count}</p>
            </OverViewCard>
          ))}
        </div>
      </Animation>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch w-full">
        <Animation
          delay={0.18}
          className="flex-1 rounded-xl glow-border relative"
        >
          <p className="absolute -top-3 left-3 bg-white dark:bg-primary-bg px-2 font-semibold">
            Languages
          </p>
          <OverViewCard border={true}>
            <ul className="flex flex-col gap-1 px-4 py-3">
              {data?.languages.map((data, i) => (
                <li key={i}>
                  <Progress
                    data={data}
                    className="bg-gradient-to-r from-[#0CCE6B] via-[#655adc] to-[#e440bb]"
                  />
                </li>
              ))}
            </ul>
          </OverViewCard>
        </Animation>

        <Animation
          delay={0.18}
          className="flex-1 rounded-xl glow-border relative"
        >
          <p className="absolute -top-3 left-3 bg-white dark:bg-primary-bg px-2 font-semibold">
            Others
          </p>
          <OverViewCard border={true}>
            <ul className="flex flex-col gap-1 px-4 py-3">
              {others.map((data, i) => (
                <li key={i}>
                  <Progress
                    data={data}
                    className="bg-gradient-to-r from-[#0CCE6B] via-[#655adc] to-[#e440bb]"
                  />
                </li>
              ))}
            </ul>
          </OverViewCard>
        </Animation>
      </div>
    </div>
  );
};

export default WakaTimeActivities;
