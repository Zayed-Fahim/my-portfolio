interface Author {
  name: string;
  url: string;
  avatar: string;
  email: string;
  linkedIn: string;
  github: {
    username: string;
    url: string;
  };
  facebook: string;
  resume: string;
}

interface Site {
  url: string;
  name: string;
  title: string;
  description: string;
  author: Author;
  //   keywords?: string[];
}

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://zayed-fahim.web.app"
    : "http://localhost:3000";

export const SITE: Site = {
  url: BASE_URL,
  name: "Zayed's portfolio",
  title: "Sayed Asif Zayed",
  description:
    "Passionate Software engineer who focused on solving problems with digital products.",
  author: {
    name: "Sayed Asif Zayed",
    url: "https://zayed-fahim.web.app",
    email: "work.zayedfahim@gmail.com",
    linkedIn: "https://www.linkedin.com/in/zayed-fahim",
    github: {
      username: "Zayed-Fahim",
      url: "https://www.github.com/Zayed-Fahim",
    },
    avatar: "/zayed/2.png",
    facebook: "https://www.facebook.com/Zayed.Fahim33",
    resume:
      "https://drive.google.com/file/d/14zOkpbR2bKQ9XQIgBnWrPdCeRlwWUQOJ/view",
  },
  //   keywords: [
  //     "bonabrian",
  //     "Bona Brian Siagian",
  //     "developer",
  //     "portfolio",
  //     "developer portfolio website",
  //     "portfolio website",
  //     "full-stack",
  //     "back-end",
  //     "front-end",
  //     "software engineer",
  //   ],
};
