import { Router, Request, Response } from 'express'
import { prisma } from '../lib/prisma'

const router = Router()

// GET all health services
router.get('/', async (req: Request, res: Response) => {
  try {
    const services = await prisma.healthService.findMany({
      orderBy: { createdAt: 'asc' }
    })
    res.json(services)
  } catch (error) {
    console.error('Error fetching health services:', error)
    res.status(500).json({ error: 'Failed to fetch health services' })
  }
})

// GET single health service
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const service = await prisma.healthService.findUnique({
      where: { serviceId: req.params.id }
    })
    if (!service) {
      return res.status(404).json({ error: 'Health service not found' })
    }
    res.json(service)
  } catch (error) {
    console.error('Error fetching health service:', error)
    res.status(500).json({ error: 'Failed to fetch health service' })
  }
})

// PUT update health service
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { serviceId, ...data } = req.body
    const updated = await prisma.healthService.update({
      where: { serviceId: req.params.id },
      data
    })
    res.json(updated)
  } catch (error) {
    console.error('Error updating health service:', error)
    res.status(500).json({ error: 'Failed to update health service' })
  }
})

export default router
