import { CircularProgress } from "@mui/material";
import { useAuth } from "../../../services/auth/authService";
import { Outlet, Navigate } from "react-router-dom";

export const AuthRoute = ({ requiredAuth = false, redirectTo = "/" }) => {
  const { isAuthenticated, isLoading } = useAuth();
  console.log(isLoading);
  if (isLoading) return <CircularProgress />;
  const isLoggedIn = isAuthenticated();
  if (requiredAuth && !isLoggedIn) return <Navigate to="/login" />;
  if (!requiredAuth && isLoggedIn) return <Navigate to={redirectTo} />;

  return <Outlet />;
};
