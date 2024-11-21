import { useState } from "react";
import { authService } from "../services/auth/authservice";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = async () => {
    const response = await authService.signUp({ email, password });
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
      <button onClick={handleSignUp}>SignUp</button>
    </>
  );
};

export default SignUp;
