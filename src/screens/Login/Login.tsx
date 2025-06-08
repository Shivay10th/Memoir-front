import { Button, TextField } from "@mui/material";
import { StyledBox } from "../../components/styles/StyledBox.styled";
import { StyledForm } from "../../components/styles/StyledForm.styled";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../services/auth/authService";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "ar1@1hourmail.com",
      password: "",
    },
  });
  const { login } = useAuth();
  const navigate = useNavigate();
  return (
    <StyledBox>
      <div>{/* <Controller render={} name={""} > */}</div>
      <div>
        <StyledForm
          onSubmit={handleSubmit(async (data) => {
            const { email, password } = data;
            try {
              await login({ email, password });
              navigate("/");
            } catch (error) {
              console.log(error);
            }
          })}
        >
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
          <Button type="submit" variant="outlined">
            Login
          </Button>
        </StyledForm>
      </div>
    </StyledBox>
  );
};

export default Login;
