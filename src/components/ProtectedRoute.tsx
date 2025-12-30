import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../stores/authStore'

interface ProtectedRouteProps {
  children: ReactNode
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAuthenticated = useAuth((state) => state.isAuthenticated)
  const token = useAuth((state) => state.token)

  if (!isAuthenticated || !token) {
    return <Navigate to="/admin-login" replace />
  }

  return <>{children}</>
}
