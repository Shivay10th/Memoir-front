import { axiosBaseQuery } from "@/utils/http/baseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import {
  LoginResponse,
  SignUpResponse,
  UserCredentials,
  UserInfo,
} from "./auth.types";
import { AxiosResponse } from "axios";

export const AUTH_API_PATHS = {
  LOGIN: "auth/login",
  SIGNUP: "auth/signup",
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (build) => ({
    login: build.mutation<AxiosResponse<LoginResponse>, UserCredentials>({
      query: (credentials) => ({
        url: AUTH_API_PATHS.LOGIN,
        method: "post",
        data: credentials,
      }),
    }),

    signUp: build.mutation<AxiosResponse<SignUpResponse>, UserInfo>({
      query: (userInfo) => ({
        url: AUTH_API_PATHS.SIGNUP,
        method: "post",
        data: userInfo,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = authApi;
