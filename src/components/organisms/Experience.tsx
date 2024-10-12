import { differenceInMonths, differenceInYears, format } from "date-fns";
import Image from "next/image";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { EXPERIENCES } from "@/data/experiences";
import { Animation } from "../molecules";
import { GoDotFill } from "react-icons/go";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../atoms";

const Experience = () => {
  return (
    <div className="mb-16" id="experience">
      <Animation delay={0.16}>
        <div className="mb-16">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Work Experience
          </h2>
        </div>
      </Animation>

      <div className={cn("px-4", "font-incognito")}>
        <Animation delay={0.18}>
          <ol className={cn("space-y-4 border-l-[1px] border-[#B2B2B2] pl-10")}>
            {EXPERIENCES.map(({ company }, index) => {
              const jobStartDate = new Date(company.startDate);
              const jobEndDate = company.endDate
                ? new Date(company.endDate)
                : new Date();
              const jobDurationInYears = differenceInYears(
                jobEndDate,
                jobStartDate
              );
              const jobDurationInMonths =
                differenceInMonths(jobEndDate, jobStartDate) % 12;
              let jobDurationText = "";
              if (jobDurationInYears > 0) {
                jobDurationText += `${jobDurationInYears} yr${
                  jobDurationInYears > 1 ? "s" : ""
                } `;
              }
              if (jobDurationInMonths > 0 || jobDurationInYears === 0) {
                jobDurationText += `${jobDurationInMonths} mo${
                  jobDurationInMonths > 1 ? "s" : ""
                }`;
              }

              return (
                <li
                  key={`${company.name}-${index}`}
                  className={cn("relative h-full")}
                >
                  <Animation delay={0.18}>
                    <div
                      className={cn(
                        "absolute -left-[63px] bottom-0 mt-0 h-full"
                      )}
                    >
                      <div className={cn("flex items-start")}>
                        <Image
                          src={company.logo}
                          alt={company.name}
                          width={45}
                          height={45}
                          className={cn(
                            "ml-0 rounded dark:border-none border-[1.5px]"
                          )}
                        />
                      </div>
                    </div>
                  </Animation>
                  <div className={cn("flex flex-col gap-6")}>
                    <Animation delay={0.18}>
                      <div
                        className={cn("flex flex-col space-y-1 leading-snug")}
                      >
                        <div className={cn("flex flex-col items-start gap-1")}>
                          <Link
                            href={company.url}
                            className={cn(
                              "text-xl font-incognito hover:underline",
                              "hover:text-[#0CCE6B]"
                            )}
                          >
                            {company.name}
                          </Link>
                          <div className="flex items-start justify-center gap-2 dark:text-zinc-400 text-zinc-600">
                            <div>{company.jobType}</div>
                            <div>&middot;</div>
                            <div>
                              {`${Number(jobDurationText.split(" ")[0]) + 1} ${
                                jobDurationText.split(" ")[1]
                              }`}
                            </div>
                          </div>
                        </div>
                        <div
                          className={cn(
                            "flex items-center gap-1 dark:text-zinc-400 text-zinc-600"
                          )}
                        >
                          <span>{company.location}</span>
                        </div>
                      </div>
                    </Animation>
                    <ol className={cn(" flex flex-col gap-5 space-y-4")}>
                      {company?.positions.map(
                        (
                          { role, startDate, endDate, stacks, accomplishments },
                          index
                        ) => {
                          const start = new Date(startDate);
                          const end = endDate ? new Date(endDate) : new Date();

                          const durationInYears = differenceInYears(end, start);
                          const durationInMonths =
                            differenceInMonths(end, start) % 12;

                          let positionDurationText = "";

                          if (durationInYears > 0) {
                            positionDurationText += `${durationInYears} yr${
                              durationInYears > 1 ? "s" : ""
                            } `;
                          }
                          if (durationInMonths > 0 || durationInYears === 0) {
                            positionDurationText += `${durationInMonths} mo${
                              durationInMonths > 1 ? "s" : ""
                            }`;
                          }

                          return (
                            <li
                              key={`${role}-${index}`}
                              className={cn("relative pl-2 md:pl-8")}
                            >
                              <div className="flex gap-5 h-full">
                                <div className="flex flex-col justify-start items-center">
                                  <Animation delay={0.18}>
                                    <GoDotFill className="h-6 w-6 text-[#B2B2B2]" />
                                  </Animation>
                                  <Animation delay={0.18} className="h-full">
                                    <div className="w-0.5 bg-[#B2B2B2] h-full" />
                                  </Animation>
                                </div>

                                <div>
                                  <div
                                    className={cn(
                                      "flex flex-col items-start gap-1",
                                      "md:flex-row"
                                    )}
                                  >
                                    <Animation delay={0.18}>
                                      <div
                                        className={cn(
                                          "flex flex-col space-y-1 leading-snug"
                                        )}
                                      >
                                        <h2
                                          className={cn(
                                            "my-0 font-cal text-lg"
                                          )}
                                        >
                                          {role}
                                        </h2>

                                        <div
                                          className={cn(
                                            "flex gap-1 dark:text-zinc-400 text-zinc-600"
                                          )}
                                        >
                                          <div className={cn("flex gap-1")}>
                                            <span>
                                              {format(start, "MMM yyyy")}
                                            </span>{" "}
                                            -{" "}
                                            <span>
                                              {endDate ? (
                                                format(
                                                  new Date(endDate),
                                                  "MMM yyyy"
                                                )
                                              ) : (
                                                <span className="text-[#0CCE6B]">
                                                  PRESENT
                                                </span>
                                              )}
                                            </span>
                                          </div>

                                          {company.positions.length > 1 && (
                                            <>
                                              <span>&middot;</span>
                                              <span>{`${
                                                Number(
                                                  positionDurationText.split(
                                                    " "
                                                  )[0]
                                                ) + 1
                                              } ${
                                                jobDurationText.split(" ")[1]
                                              }`}</span>
                                            </>
                                          )}
                                        </div>

                                        <div
                                          className={cn(
                                            "flex items-center gap-1 dark:text-zinc-400 text-zinc-600"
                                          )}
                                        >
                                          <span>{company.workplaceType}</span>
                                        </div>
                                      </div>
                                    </Animation>
                                  </div>
                                  <Animation delay={0.18}>
                                    <div
                                      className={cn(
                                        "my-1 flex flex-wrap gap-1"
                                      )}
                                    >
                                      {stacks?.map(({ name, icon }, index) => {
                                        return (
                                          <TooltipProvider key={index}>
                                            <Tooltip>
                                              <TooltipTrigger asChild>
                                                <div
                                                  className={cn(
                                                    "rounded bg-[#F7F7F7] dark:bg-[#18181B] border-[1.5px] border-black/[0.1] dark:border-white/[0.2] p-1.5"
                                                  )}
                                                >
                                                  {icon}
                                                </div>
                                              </TooltipTrigger>
                                              <TooltipContent>
                                                {name}
                                              </TooltipContent>
                                            </Tooltip>
                                          </TooltipProvider>
                                        );
                                      })}
                                    </div>
                                  </Animation>
                                  <Animation delay={0.18}>
                                    <ul className={cn("pl-4")}>
                                      {accomplishments.map(
                                        (accomplishment, index) => {
                                          const htmlContent = {
                                            __html: accomplishment,
                                          };
                                          return (
                                            <li
                                              key={index}
                                              className={cn(
                                                "list-disc my-1 leading-snug"
                                              )}
                                            >
                                              <p
                                                className={cn(
                                                  "dark:text-zinc-400 text-zinc-600"
                                                )}
                                                dangerouslySetInnerHTML={
                                                  htmlContent
                                                }
                                              />
                                            </li>
                                          );
                                        }
                                      )}
                                    </ul>
                                  </Animation>
                                </div>
                              </div>
                            </li>
                          );
                        }
                      )}
                    </ol>
                  </div>
                </li>
              );
            })}
          </ol>
        </Animation>
      </div>
    </div>
  );
};

export default Experience;
