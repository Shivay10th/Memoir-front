import { useState } from "react";
import { ENDPOINTS } from "../../constant/endpoints";
import { apiClient } from "../../utils/apiClient";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const login = async (credentials: unknown) => {
    try {
      setIsLoading(true);
      const response = await apiClient.Post(ENDPOINTS.AUTH.LOGIN, credentials);
      localStorage.setItem("auth_token", response.access_token);
      setError("");
      console.log(response);
      return "Login success";
    } catch (error) {
      setError("Login failed");
      console.log(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (credentials: unknown) => {
    try {
      setIsLoading(true);
      await apiClient.Post(ENDPOINTS.AUTH.SIGN_UP, credentials);
      return "Sign up success";
    } catch (error) {
      setError(() => "Sign up failed");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    console.log(error);
  };
  const isAuthenticated = () => {
    const authToken = localStorage.getItem("auth_token");
    return authToken ? authToken : false;
  };
  return { isLoading, error, login, signUp, isAuthenticated };
};
