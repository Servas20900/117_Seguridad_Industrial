import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../stores/authStore'
import '../styles.css'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const login = useAuth((state) => state.login)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const API_URL = import.meta.env.PROD ? '' : 'http://localhost:3001'
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })

      const data = await response.json()

      if (response.ok && data.token) {
        login(data.token)
        navigate('/admin-117')
      } else {
        setError(data.error || 'Error al autenticar')
      }
    } catch (err) {
      setError('Error de conexión con el servidor')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="auth-shell">
      <section className="auth-card" aria-labelledby="admin-login-title">
        <h2 id="admin-login-title">Panel de Administrador</h2>

        <form onSubmit={handleSubmit} className="auth-actions">
          <div>
            <label>
              Usuario
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ingresa tu usuario"
                disabled={isLoading}
                required
              />
            </label>
          </div>

          <div>
            <label>
              Contraseña
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa tu contraseña"
                disabled={isLoading}
                required
              />
            </label>
          </div>

          {error && <div className="auth-error" role="alert">{error}</div>}

          <button type="submit" disabled={isLoading} className="btn primary full">
            {isLoading ? 'Autenticando...' : 'Ingresar'}
          </button>
        </form>

        <p className="auth-meta">Panel seguro • Credenciales configuradas en el servidor</p>
      </section>
    </main>
  )
}
