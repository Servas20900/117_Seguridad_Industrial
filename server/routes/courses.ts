import { Router, Request, Response } from 'express'
import { prisma } from '../lib/prisma'

const router = Router()

// GET all courses
router.get('/', async (req: Request, res: Response) => {
  try {
    const courses = await prisma.course.findMany({
      orderBy: { createdAt: 'asc' }
    })
    res.json(courses)
  } catch (error) {
    console.error('Error fetching courses:', error)
    res.status(500).json({ error: 'Failed to fetch courses' })
  }
})

// GET single course
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const course = await prisma.course.findUnique({
      where: { courseId: req.params.id }
    })
    if (!course) {
      return res.status(404).json({ error: 'Course not found' })
    }
    res.json(course)
  } catch (error) {
    console.error('Error fetching course:', error)
    res.status(500).json({ error: 'Failed to fetch course' })
  }
})

// PUT update course
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { courseId, ...data } = req.body
    const updated = await prisma.course.update({
      where: { courseId: req.params.id },
      data
    })
    res.json(updated)
  } catch (error) {
    console.error('Error updating course:', error)
    res.status(500).json({ error: 'Failed to update course' })
  }
})

export default router
