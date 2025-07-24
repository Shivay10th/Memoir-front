import { useToast } from "@/components";
import { useAuth } from "@/services";
import { UserCredentials } from "@/services/authentication/auth.types";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCredentials>({
    defaultValues: {
      email: "ar1@1hourmail.com",
      password: "",
    },
  });

  const navigate = useNavigate();
  const { loginMutation } = useAuth();
  const toast = useToast();
  const login = loginMutation.mutateAsync;

  const handleLogin = useCallback(async (data: UserCredentials) => {
    const { email, password } = data;
    try {
      await login({ email, password });
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
