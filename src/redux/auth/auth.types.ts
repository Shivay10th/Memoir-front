export interface UserCredentials {
  email: string
  password: string
}

export interface UserInfo extends UserCredentials {
  userName: string
}

export interface LoginResponse {
  accessToken: string
}

export interface SignUpResponse {
  message: string
}
