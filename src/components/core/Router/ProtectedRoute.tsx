import { useAuth } from '@/hooks'
import { Outlet, Navigate } from 'react-router'
import { ROUTES_PATH } from './Router.data'

interface AuthRouteProps {
  requiredAuth?: boolean
  redirectTo?: string
}

export const AuthRoute = ({
  requiredAuth = false,
  redirectTo = ROUTES_PATH.BASE,
}: AuthRouteProps) => {
  const { isAuthenticated } = useAuth()

  if (requiredAuth && !isAuthenticated)
    return <Navigate to={ROUTES_PATH.LOGIN} />
  if (!requiredAuth && isAuthenticated) return <Navigate to={redirectTo} />

  return <Outlet />
}
