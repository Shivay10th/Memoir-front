import { Button, LinearProgress } from "@mui/material";
import { StyledForm } from "@/components/styles";
import { useSignUp } from "./SignUp.controller";
import { SIGNUP_FORM_FIELDS } from "./SignUp.data";
import { InputBox } from "@/components";

const SignUp = () => {
  const {
    errors,
    handleSubmit,
    handleSignUp,
    register,
    checkForUserNameAvailability,
    checkingAvailability,
  } = useSignUp();

  return (
    <StyledForm onSubmit={handleSubmit(handleSignUp)}>
      <InputBox
        {...register(SIGNUP_FORM_FIELDS.EMAIL)}
        label="Email"
        type="email"
        errorMessage={errors[SIGNUP_FORM_FIELDS.EMAIL]?.message}
      />
      <InputBox
        {...register(SIGNUP_FORM_FIELDS.USERNAME)}
        label="User Name"
        onChange={({ target: { value } }) =>
          checkForUserNameAvailability(value)
        }
        errorMessage={errors[SIGNUP_FORM_FIELDS.USERNAME]?.message}
      />
      {checkingAvailability && <LinearProgress />}
      <InputBox
        {...register(SIGNUP_FORM_FIELDS.PASSWORD)}
        errorMessage={errors[SIGNUP_FORM_FIELDS.PASSWORD]?.message}
        label="Password"
        type="Password"
      />
      <Button type="submit" variant="contained">
        Sign Up
      </Button>
    </StyledForm>
  );
};

export default SignUp;
