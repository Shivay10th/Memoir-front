import { ENDPOINTS } from "../../constant/enpoints";
import { apiClient } from "../../utils/apiClient";

export const authService = {
  login: async (credentials: any) => {
    const response = await apiClient.Post(ENDPOINTS.AUTH.LOGIN, credentials);
    console.log(response);

    localStorage.setItem("auth_token", response.access_token);
    return "Success";
  },
  signUp: (credentials: any) =>
    apiClient.Post(ENDPOINTS.AUTH.SIGN_UP, credentials),
};
