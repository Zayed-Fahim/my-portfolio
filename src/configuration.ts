interface IConfig {
  baseUrl: string;
  apiBaseUrl: string;
  githubUsername: string;
  githubJoinYear: string;
}

const configuration = (): IConfig => {
  return {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
    apiBaseUrl: process.env.API_BASE_URL || "https://zayedfahim.vercel.app",
    githubUsername: process.env.GITHUB_USERNAME || "Zayed-Fahim",
    githubJoinYear: process.env.GITHUB_JOIN_YEAR || "2020",
  };
};

export default configuration();
