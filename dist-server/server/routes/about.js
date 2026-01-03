"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_js_1 = require("../lib/prisma.js");
const router = (0, express_1.Router)();
// GET todas las galerías de About
router.get('/', async (req, res) => {
    try {
        const galleries = await prisma_js_1.prisma.galleries.findMany();
        res.json(galleries);
    }
    catch (error) {
        console.error('Error fetching galleries:', error);
        res.status(500).json({ error: 'Error fetching galleries' });
    }
});
// GET una galería específica
router.get('/:title', async (req, res) => {
    try {
        const gallery = await prisma_js_1.prisma.galleries.findUnique({
            where: { title: req.params.title }
        });
        if (!gallery) {
            return res.status(404).json({ error: 'Gallery not found' });
        }
        res.json(gallery);
    }
    catch (error) {
        console.error('Error fetching gallery:', error);
        res.status(500).json({ error: 'Error fetching gallery' });
    }
});
// PUT actualizar una galería
router.put('/:title', async (req, res) => {
    try {
        const { title, category, images } = req.body;
        const updated = await prisma_js_1.prisma.galleries.update({
            where: { title: req.params.title },
            data: {
                category,
                images: Array.isArray(images) ? images.filter(img => img.trim()) : []
            }
        });
        res.json(updated);
    }
    catch (error) {
        console.error('Error updating gallery:', error);
        res.status(500).json({ error: 'Error updating gallery' });
    }
});
exports.default = router;
