import "../../app/styles/gradientBorder.css";
import { OverViewCard } from "../atoms";
import Progress from "../atoms/ProgressBar";

const WakaTimeActivities = () => {
  const activities = [
    {
      title: "Daily Coding Average",
      count: "4 hrs 30 mins",
    },
    {
      title: "This Week Coding Time",
      count: "27 hrs",
    },
    {
      title: "Best Day Coding Time",
      count: "October 09, 2024 (9 hrs 4 mins)",
    },
    {
      title: "All Time Coding Time",
      count: "1,378 hrs 18 mins",
    },
  ];

  const languages = [
    {
      name: "JavaScript",
      percent: 74,
    },
    {
      name: "TypeScript",
      percent: 10,
    },
    {
      name: "Others",
      percent: 16,
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
  ];

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-5">
        {activities.map(({ title, count }, i) => (
          <OverViewCard key={i}>
            <h1 className="text-base">{title}</h1>
            <p className="font-bold text-xl">{count}</p>
          </OverViewCard>
        ))}
      </div>

      <div className="flex flex-grow gap-5 items-stretch w-full">
        {/* First card */}
        <div className="flex-1 rounded-xl glow-border relative">
          <p className="absolute -top-3 left-3 bg-white dark:bg-primary-bg px-2 font-semibold">
            Languages
          </p>
          <OverViewCard border={true}>
            <ul className="flex flex-col gap-1 px-4 py-3">
              {languages.map((data, i) => (
                <li key={i}>
                  <Progress
                    data={data}
                    className="bg-gradient-to-r from-[#0CCE6B] via-[#655adc] to-[#e440bb]"
                  />
                </li>
              ))}
            </ul>
          </OverViewCard>
        </div>

        {/* Second card */}
        <div className="flex-1 rounded-xl glow-border relative">
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
        </div>
      </div>
    </div>
  );
};

export default WakaTimeActivities;
