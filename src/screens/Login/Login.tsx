import { Button } from "@mui/material";
import { useLogin } from "./Login.controller";
import { InputBox, StyledBox, StyledForm } from "@/components";
import { LOGIN_FORM_ERRORS, LOGIN_FORM_FIELDS } from "./Login.data";

const Login = () => {
  const { errors, handleSubmit, register, handleLogin } = useLogin();
  return (
    <StyledBox>
      <div>
        <StyledForm onSubmit={handleSubmit(handleLogin)}>
          <InputBox
            {...register(LOGIN_FORM_FIELDS.EMAIL)}
            label="Email"
            type="email"
            errorMessage={errors[LOGIN_FORM_FIELDS.EMAIL]?.message}
          />
          <InputBox
            {...register(LOGIN_FORM_FIELDS.PASSWORD, {
              required: LOGIN_FORM_ERRORS.REQUIRED_PASSWORD,
              minLength: {
                value: 5,
                message: LOGIN_FORM_ERRORS.MINIMUM_PASSWORD_LENGTH,
              },
            })}
            errorMessage={errors[LOGIN_FORM_FIELDS.PASSWORD]?.message}
            label="Password"
            type="Password"
          />
          <Button type="submit" variant="contained">
            Login
          </Button>
        </StyledForm>
      </div>
    </StyledBox>
  );
};

export default Login;
