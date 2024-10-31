import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";

export const fetchData = async (
  url: string,
  method: Method,
  config?: AxiosRequestConfig
) => {
  try {
    const response: AxiosResponse = await axios({
      url,
      method,
      ...config,
      headers: {
        "Content-Type": "application/json",
        ...config?.headers,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error;
    }
  }
};
