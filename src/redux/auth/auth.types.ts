export interface UserCredentials {
  email: string;
  password: string;
}

export interface UserInfo extends UserCredentials {
  username: string;
}

export interface LoginResponse {
  accessToken: string;
}

export interface SignUpResponse {
  message: string;
}
