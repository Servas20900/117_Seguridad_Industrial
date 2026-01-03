import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import coursesRouter from './routes/courses.js'
import healthRouter from './routes/health.js'
import equipmentRouter from './routes/equipment.js'
import aboutRouter from './routes/about.js'
import authRouter from './routes/auth.js'

dotenv.config()

const app: Express = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// API routes
app.use('/api/auth', authRouter)
app.use('/api/courses', coursesRouter)
app.use('/api/health', healthRouter)
app.use('/api/equipment', equipmentRouter)
app.use('/api/about', aboutRouter)

app.get('/api/health-check', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(process.cwd(), 'dist')
  console.log('🚀 Serving static files from:', distPath)
  app.use(express.static(distPath))
  
  // All other routes should serve the React app
  app.use((req: Request, res: Response) => {
    if (!req.path.startsWith('/api')) {
      res.sendFile(path.join(distPath, 'index.html'))
    }
  })
}

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`)
  console.log(` Environment: ${process.env.NODE_ENV || 'development'}`)
})
