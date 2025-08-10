import { useForm } from "react-hook-form";
import {
  SIGNUP_DEFAULTS,
  SIGNUP_FORM_FIELDS,
  signupSchema,
} from "./SignUp.data";
import { UserInfo, useSignUpMutation } from "@/redux/auth";
import { ROUTES_PATH, useToast } from "@/components";
import { useLazyUserNameAvailabilityQuery } from "@/redux/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDebounce } from "@/hooks/useDebounce";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const {
    register,
    setError,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<UserInfo>({
    defaultValues: SIGNUP_DEFAULTS,
    mode: "all",
    resolver: yupResolver(signupSchema),
  });

  const [signUp] = useSignUpMutation();
  const [userNameAvailability, { isFetching: checkingAvailability }] =
    useLazyUserNameAvailabilityQuery();

  const navigate = useNavigate();
  const toast = useToast();

  const checkForUserNameAvailability = useDebounce(async (name: unknown) => {
    if (!name) return;
    try {
      const response = await userNameAvailability(name as string).unwrap();
      if (!response.data.value)
        setError(SIGNUP_FORM_FIELDS.USERNAME, {
          message: response.data.message,
        });
      else clearErrors(SIGNUP_FORM_FIELDS.USERNAME);
    } catch (error) {
      toast({ error });
    }
  }, 500);

  const handleSignUp = async (userInfo: UserInfo) => {
    try {
      const {
        data: { message },
      } = await signUp(userInfo).unwrap();
      toast({ message });
      navigate(ROUTES_PATH.LOGIN);
    } catch (error) {
      toast({ error });
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    handleSignUp,
    checkForUserNameAvailability,
    checkingAvailability,
  };
};
