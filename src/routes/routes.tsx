import { authService } from "../services/auth/authService";
import { Outlet, Navigate } from "react-router-dom";

export const AuthRoute = ({ requiredAuth = false, redirectTo = "/" }) => {
  const isLoggedIn = authService.isAuthenticated();
  if (requiredAuth && !isLoggedIn) return <Navigate to="/login" />;
  if (!requiredAuth && isLoggedIn) return <Navigate to={redirectTo} />;

  return <Outlet />;
};
