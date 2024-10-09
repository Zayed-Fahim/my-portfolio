import {
  Bootstrap,
  Git,
  JavaScript,
  MySQL,
  NextJS,
  PostgreSQL,
  Prisma,
  ReactJS,
  Redis,
  TailwindCSS,
  TypeScript,
} from "@/constants";
import { Stack } from "@/types/stack";
import { cn } from "@/utils/cn";

export const STACKS: Stack = {
  TypeScript: <TypeScript className={cn("size-4 fill-[#3178C6]")} />,
  JavaScript: <JavaScript className={cn("size-4 fill-[#F7DF1E]")} />,
  "Next.js": <NextJS className={cn("size-4 fill-black", "dark:fill-white")} />,
  "React.js": <ReactJS className={cn("size-4 fill-[#61DAFB]")} />,
  "Tailwind CSS": <TailwindCSS className={cn("size-4 fill-[#06B6D4]")} />,
  MySQL: <MySQL className={cn("size-4 fill-[#4479A1]")} />,
  PostgreSQL: <PostgreSQL className={cn("size-4 fill-[#4169E1]")} />,
  Redis: <Redis className={cn("size-4 fill-[#FF4438]")} />,
  Prisma: (
    <Prisma className={cn("size-4 fill-[##2D3748]", "dark:fill-white")} />
  ),
  Git: <Git className={cn("size-4 fill-[#F05032]")} />,
  Bootstrap: <Bootstrap className={cn("size-4 fill-[#7952B3]")} />,
};
