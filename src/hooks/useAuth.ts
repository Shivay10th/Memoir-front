import { useNavigate } from 'react-router'

export const useAuth = () => {
  const navigate = useNavigate()

  const isAuthenticated = localStorage.getItem('token') ?? false

  const logOut = () => {
    localStorage.removeItem('token')
    navigate('/')
  }
  return { isAuthenticated, logOut }
}
