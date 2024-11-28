export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    SIGN_UP: "/auth/signup",
  },
} as const;

export type Route =
  (typeof ENDPOINTS)[keyof typeof ENDPOINTS][keyof (typeof ENDPOINTS)[keyof typeof ENDPOINTS]];
