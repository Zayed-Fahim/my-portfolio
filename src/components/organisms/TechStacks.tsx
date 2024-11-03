import { STACKS } from "@/data/stacks";
import { Animation } from "@/components/molecules";

const TechStacks = () => {
  return (
    <div className="flex flex-col gap-10">
      <Animation delay={0.16}>
        <h1 className="text-4xl font-incognito font-bold">Tech Stack</h1>
      </Animation>
      <Animation delay={0.18}>
        <div className="flex flex-wrap gap-4 w-full">
          {STACKS.map(({ name, icon }, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-4 rounded bg-card px-4 py-2 bg-[#f7f7f7] dark:bg-primary-bg border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 cursor-pointer"
              >
                <div className="w-5 h-5">{icon}</div>
                <span>{name}</span>
              </div>
            );
          })}
        </div>
      </Animation>
    </div>
  );
};

export default TechStacks;
