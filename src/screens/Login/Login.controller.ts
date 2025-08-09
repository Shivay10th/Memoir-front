import { useToast } from "@/components";
import { useLoginMutation, UserCredentials } from "@/redux/auth";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LOGIN_DEFAULT, LOGIN_MESSAGES, loginSchema } from "./Login.data";
import { yupResolver } from "@hookform/resolvers/yup";

export const useLogin = () => {
  const [loginUser] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCredentials>({
    defaultValues: LOGIN_DEFAULT,
    mode: "all",
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = useCallback(async (data: UserCredentials) => {
    const { email, password } = data;
    try {
      const {
        data: { accessToken },
      } = await loginUser({ email, password }).unwrap();
      toast({ message: LOGIN_MESSAGES.SUCCESS });

      localStorage.setItem("token", accessToken);

      navigate("/");
    } catch (error) {
      toast({ error });
    }
  }, []);

  return {
    register,
    handleSubmit,
    errors,
    handleLogin,
  };
};
