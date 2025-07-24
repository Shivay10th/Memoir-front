import { Button, TextField } from "@mui/material";
import { StyledBox } from "../../components/styles/StyledBox.styled";
import { StyledForm } from "../../components/styles/StyledForm.styled";
import { useLogin } from "./Login.controller";

const Login = () => {
  const { errors, handleSubmit, register, handleLogin } = useLogin();
  return (
    <StyledBox>
      <div>
        <StyledForm onSubmit={handleSubmit(handleLogin)}>
          <TextField
            {...register("email", { required: "Email is required" })}
            label="Email"
            type="email"
          />
          <p>{errors.email?.message}</p>
          <TextField
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 5,
                message: "Password should be greater than 5",
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
