import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { AxiosBaseQuery } from "./http.type";
interface AxiosBaseQueryConfig extends AxiosRequestConfig {
  baseUrl: string;
}

export const axiosBaseQuery = (
  config?: AxiosBaseQueryConfig
): AxiosBaseQuery => {
  const { baseUrl } = config || { baseUrl: "http://localhost:3000/" };

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
