import { axiosBaseQuery } from "@/utils/http/baseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { LoginResponse, UserCredentials } from "./auth.types";
import { AxiosResponse } from "axios";

export const AUTH_API_PATHS = {
  LOGIN: "auth/login",
};

export const authAPI = createApi({
  baseQuery: axiosBaseQuery(),
  endpoints: (build) => ({
    login: build.mutation<AxiosResponse<LoginResponse>, UserCredentials>({
      query: (credentials) => ({
        url: AUTH_API_PATHS.LOGIN,
        method: "post",
        data: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authAPI;
