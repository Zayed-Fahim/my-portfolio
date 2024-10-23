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
    });

    return {
      success: response.data.success,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        success: error.response.data?.success || false,
        message: error.response.data?.message || "Something went wrong",
      };
    } else {
      return {
        success: false,
        message: "Network error or unknown error occurred",
      };
    }
  }
};
