import { useToast } from "@/components";
import { useLoginMutation, UserCredentials } from "@/redux/auth";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [loginUser] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCredentials>({
    defaultValues: {
      email: "shivam@gmail.com",
      password: "",
    },
  });

  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = useCallback(async (data: UserCredentials) => {
    const { email, password } = data;
    try {
      const {
        data: { accessToken },
      } = await loginUser({ email, password }).unwrap();
      toast({ message: "Logged In successfully!" });
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
