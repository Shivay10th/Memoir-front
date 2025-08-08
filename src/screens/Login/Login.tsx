import { Button, TextField } from "@mui/material";
import { useLogin } from "./Login.controller";
import { StyledBox, StyledForm } from "@/components";
import { LOGIN_FORM_ERRORS } from "./Login.data";

const Login = () => {
  const { errors, handleSubmit, register, handleLogin } = useLogin();
  return (
    <StyledBox>
      <div>
        <StyledForm onSubmit={handleSubmit(handleLogin)}>
          <TextField
            {...register("email", {
              required: LOGIN_FORM_ERRORS.REQUIRED_EMAIL,
            })}
            label="Email"
            type="email"
          />
          <p>{errors.email?.message}</p>
          <TextField
            {...register("password", {
              required: LOGIN_FORM_ERRORS.REQUIRED_PASSWORD,
              minLength: {
                value: 5,
                message: LOGIN_FORM_ERRORS.MINIMUM_PASSWORD_LENGTH,
              },
            })}
            label="Password"
            type="Password"
          />
          <p>{errors.password?.message}</p>
          <Button type="submit" variant="contained">
            Login
          </Button>
        </StyledForm>
      </div>
    </StyledBox>
  );
};

export default Login;
