"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = require("../lib/prisma");
const router = (0, express_1.Router)();
// GET all courses
router.get('/', async (req, res) => {
    try {
        const courses = await prisma_1.prisma.course.findMany({
            orderBy: { createdAt: 'asc' }
        });
        res.json(courses);
    }
    catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({ error: 'Failed to fetch courses' });
    }
});
// GET single course
router.get('/:id', async (req, res) => {
    try {
        const course = await prisma_1.prisma.course.findUnique({
            where: { courseId: req.params.id }
        });
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.json(course);
    }
    catch (error) {
        console.error('Error fetching course:', error);
        res.status(500).json({ error: 'Failed to fetch course' });
    }
});
// PUT update course
router.put('/:id', async (req, res) => {
    try {
        const { courseId, ...data } = req.body;
        const updated = await prisma_1.prisma.course.update({
            where: { courseId: req.params.id },
            data
        });
        res.json(updated);
    }
    catch (error) {
        console.error('Error updating course:', error);
        res.status(500).json({ error: 'Failed to update course' });
    }
});
exports.default = router;
