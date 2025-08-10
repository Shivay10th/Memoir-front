import { object, string } from "yup";
import { LOGIN_FORM_ERRORS, LOGIN_FORM_FIELDS, loginSchema } from "../Login";

export const SIGNUP_FORM_FIELDS = {
  ...LOGIN_FORM_FIELDS,
  USERNAME: "username",
} as const;

export const SIGNUP_DEFAULTS = {
  [SIGNUP_FORM_FIELDS.EMAIL]: "",
  [SIGNUP_FORM_FIELDS.PASSWORD]: "",
  [SIGNUP_FORM_FIELDS.USERNAME]: "",
};

export const SIGNUP_FORM_ERRORS = {
  ...LOGIN_FORM_ERRORS,
  USERNAME_REQUIRED: "User Name is required!",
};

export const signupSchema = loginSchema.concat(
  object({
    [SIGNUP_FORM_FIELDS.USERNAME]: string().required(
      SIGNUP_FORM_ERRORS.USERNAME_REQUIRED
    ),
  })
);
