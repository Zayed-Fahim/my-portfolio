interface IConfig {
  baseUrl: string | undefined;
  apiBaseUrl: string | undefined;
  githubUsername: string | undefined;
  githubJoinYear: string | undefined;
}

const configuration = (): IConfig => {
  const {
    NEXT_PUBLIC_GITHUB_USERNAME: githubUsername,
    NEXT_PUBLIC_GITHUB_JOIN_YEAR: githubJoinYear,
    API_BASE_URL: apiBaseUrl,
    BASE_URL: baseUrl,
  } = process.env;

  if (!apiBaseUrl || !githubUsername || !githubJoinYear) {
    console.error("Missing important environment variable");
  }

  return {
    baseUrl,
    apiBaseUrl,
    githubUsername,
    githubJoinYear,
  };
};

export default configuration();
