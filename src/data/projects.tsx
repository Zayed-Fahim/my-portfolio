import {
  ExpressJS,
  JavaScript,
  JWT,
  MongoDB,
  MongooseJS,
  NextJS,
  NodeJS,
  ReactJS,
  TailwindCSS,
  TypeScript,
} from "@/constants";
import { cn } from "@/utils/cn";

export const projectData = [
  {
    styles: {
      backgroundImage: "/svg/01.svg",
      brandColor: "#0CCE6B",
    },
    title: "My Portfolio",
    shortDescription: "Here is my digital version of resume.",
    technologies: [
      {
        name: "JavaScript",
        icon: <JavaScript className={cn("w-6 h-6")} fill="#F7DF1E" />,
      },
      {
        name: "TypeScript",
        icon: <TypeScript className={cn("w-6 h-6")} fill="#3178C6" />,
      },

      {
        name: "Next.js",
        icon: <NextJS className={cn("w-6 h-6")} />,
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
          <ExpressJS className={cn("w-6 h-6 fill-black", "dark:fill-white")} />
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
    ],
    image: "/projects/3.png",
    liveSite: "https://zayed-fahim.web.app",
    clientRepo: "https://github.com/Zayed-Fahim/my-portfolio",
    serverRepo: "https://github.com/Zayed-Fahim/my-portfolio-backend",
  },
  {
    styles: {
      backgroundImage: "/svg/02.svg",
      brandColor: "#FFC61A",
    },
    title: "Amader School",
    shortDescription:
      "Amader School, a web-based school administration system.",
    technologies: [
      {
        name: "JavaScript",
        icon: <JavaScript className={cn("w-6 h-6")} fill="#F7DF1E" />,
      },

      {
        name: "React.js",
        icon: <ReactJS className={cn("w-6 h-6")} fill="#61DAFB" />,
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
          <ExpressJS className={cn("w-6 h-6 fill-black", "dark:fill-white")} />
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
    ],
    image: "/projects/1.png",
    liveSite: "https://v1-app-amader-school.web.app",
    clientRepo: "https://github.com/Zayed-Fahim/amader-school-client",
    serverRepo: "https://github.com/Zayed-Fahim/amader-school-server",
  },
  {
    styles: {
      backgroundImage: "/svg/03.svg",
      brandColor: "#2563EB",
    },
    title: "phones.com",
    shortDescription:
      "E-commerce platform for buying or selling pre-owned devices.",
    technologies: [
      {
        name: "JavaScript",
        icon: <JavaScript className={cn("w-6 h-6")} fill="#F7DF1E" />,
      },

      {
        name: "React.js",
        icon: <ReactJS className={cn("w-6 h-6")} fill="#61DAFB" />,
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
          <ExpressJS className={cn("w-6 h-6 fill-black", "dark:fill-white")} />
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
    ],
    image: "/projects/2.png",
    liveSite: "https://used-products-resale-mar-d348c.web.app",
    clientRepo:
      "https://github.com/Zayed-Fahim/Used-products-resale-market-client-side",
    serverRepo:
      "https://github.com/Zayed-Fahim/Used-products-resale-market-server-side",
  },
  {
    styles: {
      backgroundImage: "/svg/04.svg",
      brandColor: "#4CA2E1",
    },
    title: "DELIVERY dot com",
    shortDescription: "Clients can review and give feedback on my services.",
    technologies: [
      {
        name: "JavaScript",
        icon: <JavaScript className={cn("w-6 h-6")} fill="#F7DF1E" />,
      },

      {
        name: "React.js",
        icon: <ReactJS className={cn("w-6 h-6")} fill="#61DAFB" />,
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
          <ExpressJS className={cn("w-6 h-6 fill-black", "dark:fill-white")} />
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
    ],
    image: "/projects/4.png",
    liveSite: "https://v1-app-deliverydotcom.web.app/",
    clientRepo: "https://github.com/Zayed-Fahim/Service-review-client-side",
    serverRepo: "https://github.com/Zayed-Fahim/Service-review-server-side",
  },
  {
    styles: {
      backgroundImage: "/svg/05.svg",
      brandColor: "#68C4AD",
    },
    title: "Active Learning",
    shortDescription: "This is an online course selling platform.",
    technologies: [
      {
        name: "JavaScript",
        icon: <JavaScript className={cn("w-6 h-6")} fill="#F7DF1E" />,
      },

      {
        name: "React.js",
        icon: <ReactJS className={cn("w-6 h-6")} fill="#61DAFB" />,
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
          <ExpressJS className={cn("w-6 h-6 fill-black", "dark:fill-white")} />
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
    ],
    image: "/projects/5.png",
    liveSite: "https://learning-platfrom-client.web.app/",
    clientRepo: "https://github.com/Zayed-Fahim/Learning-platform-client-side",
    serverRepo: "https://github.com/Zayed-Fahim/Learniing-platform-server-side",
  },
];
