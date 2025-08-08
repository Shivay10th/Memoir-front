import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { AxiosBaseQuery } from "./http.type";
import { API_BASE_URL } from "@/constant";

interface AxiosBaseQueryConfig extends AxiosRequestConfig {
  baseUrl: string;
}

export const axiosBaseQuery = (
  config?: AxiosBaseQueryConfig
): AxiosBaseQuery => {
  const { baseUrl } = config || { baseUrl: API_BASE_URL };

  return async (baseQueryConfig) => {
    try {
      const { data, status } = await axios({
        baseURL: baseUrl,
        ...baseQueryConfig,
      });

      return {
        data: { data, status },
      };
    } catch (error) {
      const { response } = error as AxiosError;

      return {
        error: {
          status: response?.status,
          response: response?.data,
        },
      };
    }
  };
};
