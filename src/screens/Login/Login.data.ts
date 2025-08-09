import { object, string } from "yup";
export const LOGIN_MESSAGES = {
  SUCCESS: "Logged In successfully!",
};

export const LOGIN_FORM_FIELDS = {
  EMAIL: "email",
  PASSWORD: "password",
} as const;

export const LOGIN_DEFAULT = {
  [LOGIN_FORM_FIELDS.EMAIL]: "",
  [LOGIN_FORM_FIELDS.PASSWORD]: "",
};

export const LOGIN_FORM_ERRORS = {
  REQUIRED_EMAIL: "Email is required!",
  VALID_EMAIL: "Email is Invalid!",
  REQUIRED_PASSWORD: "Password is required!",
  MINIMUM_PASSWORD_LENGTH: "Password should be greater than 5",
};

export const loginSchema = object({
  [LOGIN_FORM_FIELDS.EMAIL]: string()
    .email(LOGIN_FORM_ERRORS.VALID_EMAIL)
    .required(LOGIN_FORM_ERRORS.REQUIRED_EMAIL),

  [LOGIN_FORM_FIELDS.PASSWORD]: string()
    .required(LOGIN_FORM_ERRORS.REQUIRED_PASSWORD)
    .min(5, LOGIN_FORM_ERRORS.MINIMUM_PASSWORD_LENGTH),
});
