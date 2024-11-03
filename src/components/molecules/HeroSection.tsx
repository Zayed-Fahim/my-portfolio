"use client";
import React, { useState } from "react";

type SkillCategories = {
  "Frontend Development": string[];
  "Backend Development": string[];
  "Database Technologies": string[];
  "Cloud & DevOps": string[];
};

type CategoryKey = keyof SkillCategories;

const HeroSectionDemo = () => {
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [installing, setInstalling] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  const [error, setError] = useState("");

  const validCommand = "yarn install skills";
  const finalMessage = "Done in";

  const skillsByMajor: SkillCategories = {
    "Backend Development": ["NodeJS", "ExpressJS", "NestJS"],
    "Frontend Development": [
      "ReactJS",
      "NextJS",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "Bootstrap",
      "RxJS",
    ],
    "Database Technologies": [
      "MongoDB",
      "MongooseJS",
      "MySQL",
      "PostgreSQL",
      "Prisma",
      "SQL",
      "Redis",
    ],
    "Cloud & DevOps": ["AWS", "S3", "Docker", "Git", "GitHub"],
  };

  const skillDelay = 500;
  const categoryDelay = 1000;
  const totalSkills = Object.values(skillsByMajor).flat().length;
  const totalTime =
    (totalSkills * skillDelay +
      Object.keys(skillsByMajor).length * categoryDelay) /
    1000;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    setError("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setError("");

      if (inputText.trim() === validCommand) {
        setLoading(true);
        setSkills([]);

        setTimeout(() => {
          setLoading(false);
          setInstalling(true);
          startDisplayingSkills();
        }, 1000);
      } else {
        setError("Command not found. Try 'yarn install skills'");
        setLoading(false);
        setInstalling(false);
        setSkills([]);
      }
    }
  };

  const startDisplayingSkills = () => {
    const categories = Object.keys(skillsByMajor) as CategoryKey[];
    let categoryIndex = 0;

    const processNextCategory = () => {
      if (categoryIndex < categories.length) {
        const category = categories[categoryIndex];
        let skillIndex = 0;

        const skillInterval = setInterval(() => {
          if (skillIndex < skillsByMajor[category].length) {
            setSkills((prev) => [...prev, skillsByMajor[category][skillIndex]]);
            skillIndex++;
          } else {
            clearInterval(skillInterval);
            categoryIndex++;
            setTimeout(processNextCategory, categoryDelay);
          }
        }, skillDelay);
      } else {
        setTimeout(() => {
          setSkills((prev) => [...prev, finalMessage]);
          // setInstalling(false); // Enable input after installation is complete
        }, 500);
      }
    };

    processNextCategory();
  };

  return (
    <aside className="bg-white dark:bg-black border dark:border-zinc-700 border-zinc-200 p-6 rounded-lg w-full h-[300px] sm:h-[280px] overflow-y-auto font-mono">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <p className="text-sm">bash</p>
      </div>
      <div className="mt-4 flex flex-col">
        <div className="text-green-400 flex items-center">
          ${" "}
          <div className="relative flex-1">
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="ml-2 bg-transparent outline-none w-full placeholder:text-sm disabled:opacity-50"
              placeholder="Type 'yarn install skills' and press Enter."
              disabled={loading || installing} // Disable input during loading and installation
            />
          </div>
        </div>
        {error && <div className="text-red-400 mt-2">{error}</div>}
        {loading && (
          <div className="text-green-400 mt-2">
            Loading...<span className="animate-pulse">|</span>
          </div>
        )}
        {installing && (
          <div className="text-yellow-400 mt-2">
            Installing my skills set...
            <span className="animate-pulse">⏳</span>
          </div>
        )}
        <div className="flex flex-col text-white">
          {skills.length > 0 && (
            <>
              {(Object.keys(skillsByMajor) as CategoryKey[]).map((category) => {
                const categorySkillsShown = skills.filter((skill) =>
                  skillsByMajor[category].includes(skill)
                );

                return categorySkillsShown.length > 0 ? (
                  <div key={category} className="mt-2">
                    <div className="text-blue-400">{category}</div>
                    {categorySkillsShown.map((skill, i) => (
                      <div key={i} className="ml-4 text-green-400">
                        + {skill}
                      </div>
                    ))}
                  </div>
                ) : null;
              })}
              {skills.includes(finalMessage) && (
                <div className="mt-2 text-yellow-400">
                  {finalMessage} {totalTime}s
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </aside>
  );
};

export default HeroSectionDemo;
