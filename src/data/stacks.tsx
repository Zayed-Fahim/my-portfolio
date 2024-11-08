import {
  AWS,
  Bootstrap,
  Docker,
  ExpressJS,
  Git,
  GitHub,
  JavaScript,
  MongoDB,
  MongooseJS,
  MySQL,
  NestJS,
  NextJS,
  NodeJS,
  PostgreSQL,
  Prisma,
  ReactJS,
  Redis,
  RxJS,
  S3,
  SQL,
  TailwindCSS,
  TypeScript,
} from "@/constants";
import { Stack } from "@/types/stack";
import { cn } from "@/utils/cn";

export const STACKS: Stack[] = [
  {
    name: "JavaScript",
    icon: <JavaScript fill="#F7DF1E" />,
  },
  {
    name: "TypeScript",
    icon: <TypeScript fill="#3178C6" />,
  },
  {
    name: "SQL",
    icon: <SQL />,
  },
  {
    name: "Node.js",
    icon: <NodeJS fill="green" />,
  },
  {
    name: "Nest.js",
    icon: <NestJS fill="#F50057" />,
  },
  {
    name: "Expres.js",
    icon: <ExpressJS />,
  },
  {
    name: "React.js",
    icon: <ReactJS fill="#61DAFB" />,
  },
  {
    name: "Next.js",
    icon: <NextJS />,
  },
  {
    name: "Tailwind CSS",
    icon: <TailwindCSS fill="#06B6D4" />,
  },
  {
    name: "Bootstrap",
    icon: <Bootstrap fill="#7952B3" />,
  },
  {
    name: "MongoDB",
    icon: <MongoDB fill="#47A248" />,
  },

  { name: "MySQL", icon: <MySQL fill="#4479A1" /> },
  {
    name: "PostgreSQL",
    icon: <PostgreSQL fill="#4169E1" />,
  },
  { name: "Redis", icon: <Redis fill="#FF4438" /> },
  {
    name: "Mongoose.js",
    icon: <MongooseJS />,
  },
  {
    name: "Prisma",
    icon: <Prisma />,
  },
  {
    name: "RxJs",
    icon: <RxJS />,
  },
  {
    name: "AWS",
    icon: <AWS fill="#FF9900" />,
  },
  {
    name: "S3",
    icon: <S3 className={cn("w-6 h-6")} fill="#FF9900" />,
  },
  {
    name: "Docker",
    icon: <Docker fill="#2496ED" />,
  },
  { name: "Git", icon: <Git fill="#F05032" /> },
  {
    name: "GitHub",
    icon: <GitHub />,
  },
];
