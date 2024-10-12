import {
  AWS,
  Docker,
  ExpressJS,
  Git,
  GitHub,
  JavaScript,
  JWT,
  MaterialTailwind,
  MongoDB,
  MongooseJS,
  NestJS,
  NextJS,
  NodeJS,
  ReactJS,
  Redis,
  RxJS,
  S3,
  TailwindCSS,
  TypeScript,
} from "@/constants";
import type { Experience } from "@/types/experience";
import { cn } from "@/utils/cn";

export const EXPERIENCES: Experience[] = [
  {
    company: {
      name: "Zaynax Limited",
      logo: "/zaynax_logo.jpeg",
      location: "Dhaka, Bangladesh",
      workplaceType: "On-Site",
      jobType: "Full-time",
      url: "https://zaynax.com/",
      startDate: "2024-03",
      endDate: null, // Present
      positions: [
        {
          role: "Software Engineer",
          startDate: "2024-07",
          endDate: null, // Present
          stacks: [
            {
              name: "JavaScript",
              icon: <JavaScript className={cn("w-6 h-6")} fill="#F7DF1E" />,
            },
            {
              name: "TypeScript",
              icon: <TypeScript className={cn("w-6 h-6")} fill="#3178C6" />,
            },
            {
              name: "NodeJS",
              icon: <NodeJS className={cn("w-6 h-6")} fill="green" />,
            },
            {
              name: "NestJS",
              icon: <NestJS className={cn("w-6 h-6")} fill="#F50057" />,
            },
            {
              name: "Redis",
              icon: <Redis className={cn("w-6 h-6")} fill="#DC382D" />,
            },
            {
              name: "MongoDB",
              icon: <MongoDB className={cn("w-6 h-6")} fill="#47A248" />,
            },
            {
              name: "JWT(Json Web Token)",
              icon: <JWT className={cn("w-6 h-6")} />,
            },
            {
              name: "RxJS",
              icon: <RxJS className={cn("w-6 h-6")} />,
            },
            {
              name: "AWS",
              icon: <AWS className={cn("w-6 h-6")} fill="#FF9900" />,
            },
            {
              name: "S3",
              icon: <S3 className={cn("w-6 h-6")} fill="#FF9900" />,
            },
            {
              name: "Docker",
              icon: <Docker className={cn("w-6 h-6 ")} fill="#2496ED" />,
            },
            {
              name: "Git",
              icon: <Git className={cn("w-6 h-6")} fill="#F54D27" />,
            },
            {
              name: "GitHub",
              icon: (
                <GitHub
                  className={cn("w-6 h-6 fill-black", "dark:fill-white")}
                />
              ),
            },
          ],
          accomplishments: [
            "Developed REST APIs to enable seamless data integration and ensure reliable backend services for <span><Link href={`https://zaynaxhealth.com`} className={`text-secondary-color hover:dark:text-white hover:text-black`}>Zaynax Health</span>.",
            "Optimized aggregation queries, significantly improving data retrieval speed and system performance.",
            "Architected microservices for key modules (product, auth, customer, CMS, WMS, payment), enhancing scalability, communication, and reliability.",
            "Integrated third-party APIs to expand platform functionality and improve user experience.",
            "Collaborated with cross-functional teams to align project objectives with business goals.",
            "Utilized Git and GitHub for version control and collaborative development, ensuring efficient code management.",
          ],
        },
        {
          role: "Jr. Full Stack Developer",
          startDate: "2024-03",
          endDate: "2024-06",
          stacks: [
            {
              name: "JavaScript",
              icon: <JavaScript className={cn("w-6 h-6")} fill="#F7DF1E" />,
            },
            {
              name: "TypeScript",
              icon: <TypeScript className={cn("w-6 h-6")} fill="#3178C6" />,
            },
            {
              name: "React.js",
              icon: <ReactJS className={cn("w-6 h-6")} fill="#61DAFB" />,
            },
            {
              name: "Next.js",
              icon: (
                <NextJS
                  className={cn("w-6 h-6 fill-black", "dark:fill-white")}
                />
              ),
            },
            {
              name: "Tailwind CSS",
              icon: <TailwindCSS className={cn("w-6 h-6")} fill="#38B2AC" />,
            },
            {
              name: "Material Tailwind",
              icon: <MaterialTailwind className={cn("w-6 h-6")} />,
            },

            {
              name: "NodeJS",
              icon: <NodeJS className={cn("w-6 h-6")} fill="green" />,
            },
            {
              name: "ExpressJS",
              icon: (
                <ExpressJS
                  className={cn("w-6 h-6 fill-black", "dark:fill-white")}
                />
              ),
            },
            {
              name: "MongoDB",
              icon: <MongoDB className={cn("w-6 h-6")} fill="#47A248" />,
            },
            {
              name: "MongooseJS",
              icon: <MongooseJS className={cn("w-6 h-6")} />,
            },
            {
              name: "JWT(Json Web Token)",
              icon: <JWT className={cn("w-6 h-6")} />,
            },
            {
              name: "AWS",
              icon: <AWS className={cn("w-6 h-6")} fill="#FF9900" />,
            },
            {
              name: "S3",
              icon: <S3 className={cn("w-6 h-6")} fill="#FF9900" />,
            },
            {
              name: "Docker",
              icon: <Docker className={cn("w-6 h-6 ")} fill="#2496ED" />,
            },
            {
              name: "Git",
              icon: <Git className={cn("w-6 h-6")} fill="#F54D27" />,
            },
            {
              name: "GitHub",
              icon: (
                <GitHub
                  className={cn("w-6 h-6 fill-black", "dark:fill-white")}
                />
              ),
            },
          ],
          accomplishments: [
            "Developed an admin panel using Next.js for efficient blog content management and administration.",
            "Designed and implemented REST APIs for blog services, boosting user engagement on platforms like Zaynax Health and Home Leads.",
            "Collaborated with cross-functional teams to align project objectives with business goals.",
            "Utilized Git and GitHub for version control and collaborative development, ensuring efficient code management.",
          ],
        },
      ],
    },
  },
  {
    company: {
      name: "Crystal Vision Solution (CVS)",
      logo: "/cvs_logo.jpeg",
      location: "Mirpur, Dhaka, Bangladesh",
      workplaceType: "On-Site",
      jobType: "Internship",
      url: "https://crystalcomputers.com.bd",
      startDate: "2023-12",
      endDate: "2024-02",
      positions: [
        {
          role: "Full Stack Developer",
          startDate: "2023-12",
          endDate: "2024-02",
          stacks: [
            {
              name: "JavaScript",
              icon: <JavaScript className={cn("w-6 h-6")} fill="#F7DF1E" />,
            },
            {
              name: "React.js",
              icon: <ReactJS className={cn("w-6 h-6")} fill="#61DAFB" />,
            },
            {
              name: "Next.js",
              icon: (
                <NextJS
                  className={cn("w-6 h-6 fill-black", "dark:fill-white")}
                />
              ),
            },
            {
              name: "Tailwind CSS",
              icon: <TailwindCSS className={cn("w-6 h-6")} fill="#38B2AC" />,
            },
            {
              name: "NodeJS",
              icon: <NodeJS className={cn("w-6 h-6")} fill="green" />,
            },
            {
              name: "ExpressJS",
              icon: (
                <ExpressJS
                  className={cn("w-6 h-6 fill-black", "dark:fill-white")}
                />
              ),
            },
            {
              name: "MongoDB",
              icon: <MongoDB className={cn("w-6 h-6")} fill="#47A248" />,
            },
            {
              name: "MongooseJS",
              icon: <MongooseJS className={cn("w-6 h-6")} />,
            },
            {
              name: "JWT(Json Web Token)",
              icon: <JWT className={cn("w-6 h-6")} />,
            },
            {
              name: "Git",
              icon: <Git className={cn("w-6 h-6")} fill="#F54D27" />,
            },
            {
              name: "GitHub",
              icon: (
                <GitHub
                  className={cn("w-6 h-6 fill-black", "dark:fill-white")}
                />
              ),
            },
          ],
          accomplishments: [
            "Developed responsive and visually appealing web applications using React.js/Next.js.",
            "Worked on server-side logic, databases, and application integration.",
            "Contributed to the overall architecture and development processes.",
            "Actively participated in mentorship opportunities and sought guidance from senior developers.",
          ],
        },
      ],
    },
  },
];
