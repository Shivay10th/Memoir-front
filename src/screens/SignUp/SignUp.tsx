import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { StyledBox, StyledForm } from "@/components/styles";
import { useAuth } from "@/services/authentication/auth";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return null;
  return (
    <>
      <StyledBox>
        <StyledForm
          onSubmit={handleSubmit(async ({ email, password }) => {
            await signUp({ email, password });
            console.log(error);
            if (!error) {
              console.log("Sign up success");
              // navigate("/login");
            }
            console.log(error);
          })}
        >
          <TextField
            {...register("email", {
              required: "Email is required",
            })}
            type="email"
            label="Email"
          />
          <p>{errors.email?.message}</p>
          <TextField
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 5,
                message: "Password must be greater than 5",
              },
            })}
            label="Password"
            type="password"
          />
          <p>{errors.password?.message}</p>
          <Button type="submit" variant="outlined">
            Sign Up
          </Button>
        </StyledForm>
      </StyledBox>
    </>
  );
};

export default SignUp;
