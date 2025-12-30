import { Router, Request, Response } from 'express'
import { prisma } from '../lib/prisma'

const router = Router()

// GET all first aid kits
router.get('/', async (req: Request, res: Response) => {
  try {
    const kits = await prisma.firstAidKit.findMany({
      orderBy: { createdAt: 'asc' }
    })
    res.json(kits)
  } catch (error) {
    console.error('Error fetching equipment:', error)
    res.status(500).json({ error: 'Failed to fetch equipment' })
  }
})

// GET single first aid kit
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const kit = await prisma.firstAidKit.findUnique({
      where: { kitId: req.params.id }
    })
    if (!kit) {
      return res.status(404).json({ error: 'Equipment not found' })
    }
    res.json(kit)
  } catch (error) {
    console.error('Error fetching equipment:', error)
    res.status(500).json({ error: 'Failed to fetch equipment' })
  }
})

// PUT update first aid kit
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { kitId, ...data } = req.body
    const updated = await prisma.firstAidKit.update({
      where: { kitId: req.params.id },
      data
    })
    res.json(updated)
  } catch (error) {
    console.error('Error updating equipment:', error)
    res.status(500).json({ error: 'Failed to update equipment' })
  }
})

export default router
