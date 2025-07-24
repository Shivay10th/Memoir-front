import { AxiosError } from "axios";

export type AxiosGenericError = AxiosError<{
  errorMessage: string;
}>;
