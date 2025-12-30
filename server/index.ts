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

app.use('/api/auth', authRouter)
app.use('/api/courses', coursesRouter)
app.use('/api/health', healthRouter)
app.use('/api/equipment', equipmentRouter)
app.use('/api/about', aboutRouter)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')))
  
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
  })
}

app.get('/api/health-check', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`)
  console.log(` Environment: ${process.env.NODE_ENV || 'development'}`)
})
