import axios from "axios";

interface FetcherConfig {
  requiresAuth?: boolean;
  apiKey?: string;
}

export const createFetcher = (config: FetcherConfig = {}) => {
  return async (url: string) => {
    try {
      const headers: Record<string, string> = {};

      if (config.requiresAuth && config.apiKey) {
        headers.Authorization = `Basic ${Buffer.from(config.apiKey).toString(
          "base64"
        )}`;
      }

      const response = await axios.get(url, { headers });

      if (response.status !== 200) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }

      return response.data;
    } catch (error) {
      console.error("Fetcher error:", error);
      throw error;
    }
  };
};

// Create specific fetchers for each use case
export const githubFetcher = createFetcher();

export const wakaTimeFetcher = createFetcher({
  requiresAuth: true,
  apiKey: `Basic ${process.env.WAKATIME_API_KEY}`,
});
