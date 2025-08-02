import { useAuth } from "@/hooks";
import { Outlet, Navigate } from "react-router-dom";

interface AuthRouteProps {
  requiredAuth?: false;
  redirectTo?: string;
}

export const AuthRoute = ({
  requiredAuth = false,
  redirectTo = "/",
}: AuthRouteProps) => {
  const { isAuthenticated } = useAuth();

  if (requiredAuth && !isAuthenticated) return <Navigate to="/login" />;
  if (!requiredAuth && isAuthenticated) return <Navigate to={redirectTo} />;

  return <Outlet />;
};
