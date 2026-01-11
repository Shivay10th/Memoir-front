import { useAuth } from '@/hooks'
import { Outlet, Navigate } from 'react-router'

interface AuthRouteProps {
  requiredAuth?: boolean
  redirectTo?: string
}

export const AuthRoute = ({
  requiredAuth = false,
  redirectTo = '/',
}: AuthRouteProps) => {
  const { isAuthenticated } = useAuth()

  if (requiredAuth && !isAuthenticated) return <Navigate to="/login" />
  if (!requiredAuth && isAuthenticated) return <Navigate to={redirectTo} />

  return <Outlet />
}
