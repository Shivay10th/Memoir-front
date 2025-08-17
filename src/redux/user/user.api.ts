import { axiosBaseQuery } from "@/utils/http";
import { createApi } from "@reduxjs/toolkit/query/react";
import { AvailableUserNameResponse } from "./user.type";
import { AxiosResponse } from "axios";

export const USER_API_PATHS = {
  USER_NAME_AVAILABILITY: "user/availability",
};

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (build) => ({
    userNameAvailability: build.query<
      AxiosResponse<AvailableUserNameResponse>,
      string
    >({
      query: (username) => ({
        url: USER_API_PATHS.USER_NAME_AVAILABILITY,
        method: "get",
        params: { username },
      }),
    }),
  }),
});

export const { useLazyUserNameAvailabilityQuery } = userApi;
