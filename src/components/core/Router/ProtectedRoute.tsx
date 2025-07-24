import { useAuth } from "@/services/authentication/auth";
import { CircularProgress } from "@mui/material";
import { Outlet, Navigate } from "react-router-dom";

export const AuthRoute = ({
  requiredAuth = false,
  redirectTo = "/",
}: {
  requiredAuth: false;
  redirectTo: string;
}) => {
  const { isAuthenticated, isLoading } = useAuth();
  console.log(isLoading);
  if (isLoading) return <CircularProgress />;
  const isLoggedIn = isAuthenticated();
  if (requiredAuth && !isLoggedIn) return <Navigate to="/login" />;
  if (!requiredAuth && isLoggedIn) return <Navigate to={redirectTo} />;

  return <Outlet />;
};
