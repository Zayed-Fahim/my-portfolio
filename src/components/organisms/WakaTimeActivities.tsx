"use client";
import "@/app/styles/gradientBorder.css";
import { OverViewCard } from "@/components/atoms";
import { ProgressBar } from "@/components/atoms";
import { Animation } from "@/components/molecules";

const WakaTimeActivities = () => {
  const activities = [
    {
      title: "Daily Coding Average",
      count: "3 hrs 5 mins",
    },
    {
      title: "Last Week Coding Time",
      count: "12 hrs 20 mins",
    },
    {
      title: "Best Day Coding Time",
      count: "Sat Oct 26th 2024(9 hrs 45 mins)",
    },
    {
      title: "All Time Coding Time",
      count: "567 hrs 14 mins",
    },
  ];

  const languages = [
    {
      name: "Typescript",
      percent: 58,
    },
    {
      name: "JavaScript",
      percent: 21,
    },
    {
      name: "Others",
      percent: 21,
    },
  ];

  const others = [
    {
      name: "VS Code",
      percent: 100,
    },
    {
      name: "Windows",
      percent: 100,
    },
    // {
    //   name: "Ubuntu",
    //   percent: 15,
    // },
  ];

  return (
    <div className="w-full flex flex-col gap-5 z-[-1]">
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
              {languages.map((data, i) => (
                <li key={i}>
                  <ProgressBar
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
                  <ProgressBar
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
