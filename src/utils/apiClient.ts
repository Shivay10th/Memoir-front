import { apiConfig, Route } from "@/constant";

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
      if (response.status === 500) {
        throw new Error("Something went wrong");
      }
      if (response.status === 401) {
        throw new Error("Unauthorized");
      }
      if (!response.ok) throw new Error(response.statusText);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  Post(endpoint: Route, data: unknown, options = {}) {
    return this.Request(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(data),
    });
  }
}

export const apiClient = new ApiClient();
