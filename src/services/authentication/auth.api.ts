import axios, { AxiosResponse } from "axios";
import { LoginResponse, UserCredentials } from "./auth.types";
import { ENDPOINTS } from "@/constant";

export const signIn = async (payload: UserCredentials) => {
  const { data } = await axios.post<
    UserCredentials,
    AxiosResponse<LoginResponse>
  >(ENDPOINTS.AUTH.LOGIN, payload);

  return data;
};
