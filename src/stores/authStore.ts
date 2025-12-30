import { create } from 'zustand'

interface AuthState {
  token: string | null
  isAuthenticated: boolean
  login: (token: string) => void
  logout: () => void
  loadToken: () => void
}

export const useAuth = create<AuthState>((set) => ({
  token: null,
  isAuthenticated: false,
  
  login: (token: string) => {
    localStorage.setItem('admin_token', token)
    set({ token, isAuthenticated: true })
  },
  
  logout: () => {
    localStorage.removeItem('admin_token')
    set({ token: null, isAuthenticated: false })
  },
  
  loadToken: () => {
    const token = localStorage.getItem('admin_token')
    if (token) {
      set({ token, isAuthenticated: true })
    }
  }
}))
