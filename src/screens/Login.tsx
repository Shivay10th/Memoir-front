import { useState } from "react";
import { authService } from "../services/auth/authservice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    const response = await authService.login({
      email,
      password,
    });
    console.log(response);
  };
  return (
    <>
      <input
        type="email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="Password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
