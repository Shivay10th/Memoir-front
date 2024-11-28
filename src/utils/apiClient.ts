import { apiConfig } from "../constant/config";
import { Route } from "../constant/endpoints";

class ApiClient {
  private baseUrl;
  constructor() {
    this.baseUrl = apiConfig.apiUrl;
  }
  async Request(endpoint: Route, options: RequestInit = {}) {
    const token = localStorage.getItem("auth_token");
    const headers = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    };
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers,
      });
      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  Post(endpoint: Route, data: any, options = {}) {
    return this.Request(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(data),
    });
  }
}

export const apiClient = new ApiClient();
