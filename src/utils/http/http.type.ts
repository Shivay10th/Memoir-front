import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export type AxiosGenericError = AxiosError<{
  errorMessage: string;
}>;

type BaseQueryConfig = AxiosRequestConfig;
type HttpResponse = Pick<AxiosResponse, "data" | "status">;

export type AxiosBaseQuery = BaseQueryFn<BaseQueryConfig, HttpResponse>;
