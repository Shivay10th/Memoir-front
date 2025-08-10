import { Button } from "@mui/material";
import { useLogin } from "./Login.controller";
import { InputBox, StyledForm } from "@/components";
import { LOGIN_FORM_FIELDS } from "./Login.data";

const Login = () => {
  const { errors, handleSubmit, register, handleLogin } = useLogin();
  return (
    <StyledForm onSubmit={handleSubmit(handleLogin)}>
      <InputBox
        {...register(LOGIN_FORM_FIELDS.EMAIL)}
        label="Email"
        type="email"
        errorMessage={errors[LOGIN_FORM_FIELDS.EMAIL]?.message}
      />
      <InputBox
        {...register(LOGIN_FORM_FIELDS.PASSWORD)}
        errorMessage={errors[LOGIN_FORM_FIELDS.PASSWORD]?.message}
        label="Password"
        type="Password"
      />
      <Button type="submit" variant="contained">
        Login
      </Button>
    </StyledForm>
  );
};

export default Login;
