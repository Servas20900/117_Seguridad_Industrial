import express, { Router, Request, Response } from 'express'

const router: Router = express.Router()

// Simple in-memory session store (in production, use a database)
const sessions = new Map<string, { createdAt: number }>()

// Admin credentials from environment variables
const ADMIN_USER = process.env.ADMIN_USERNAME || 'admin'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'

// Generate simple session token
function generateToken(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

router.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body

  if (!username || !password) {
    res.status(400).json({ error: 'Usuario y contraseña requeridos' })
    return
  }

  if (username === ADMIN_USER && password === ADMIN_PASSWORD) {
    const token = generateToken()
    sessions.set(token, { createdAt: Date.now() })
    
    res.json({ 
      success: true, 
      token,
      message: 'Autenticación exitosa'
    })
  } else {
    res.status(401).json({ 
      error: 'Usuario o contraseña inválidos' 
    })
  }
})

router.post('/verify', (req: Request, res: Response) => {
  const { token } = req.body

  if (!token || !sessions.has(token)) {
    res.status(401).json({ error: 'Sesión inválida' })
    return
  }

  // Check if token is still valid (24 hours)
  const session = sessions.get(token)!
  const isExpired = Date.now() - session.createdAt > 24 * 60 * 60 * 1000

  if (isExpired) {
    sessions.delete(token)
    res.status(401).json({ error: 'Sesión expirada' })
    return
  }

  res.json({ valid: true })
})

router.post('/logout', (req: Request, res: Response) => {
  const { token } = req.body

  if (token && sessions.has(token)) {
    sessions.delete(token)
  }

  res.json({ success: true })
})

export default router
