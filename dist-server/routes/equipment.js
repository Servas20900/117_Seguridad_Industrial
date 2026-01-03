"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = require("../lib/prisma");
const router = (0, express_1.Router)();
// GET all first aid kits
router.get('/', async (req, res) => {
    try {
        const kits = await prisma_1.prisma.firstAidKit.findMany({
            orderBy: { createdAt: 'asc' }
        });
        res.json(kits);
    }
    catch (error) {
        console.error('Error fetching equipment:', error);
        res.status(500).json({ error: 'Failed to fetch equipment' });
    }
});
// GET single first aid kit
router.get('/:id', async (req, res) => {
    try {
        const kit = await prisma_1.prisma.firstAidKit.findUnique({
            where: { kitId: req.params.id }
        });
        if (!kit) {
            return res.status(404).json({ error: 'Equipment not found' });
        }
        res.json(kit);
    }
    catch (error) {
        console.error('Error fetching equipment:', error);
        res.status(500).json({ error: 'Failed to fetch equipment' });
    }
});
// PUT update first aid kit
router.put('/:id', async (req, res) => {
    try {
        const { kitId, ...data } = req.body;
        const updated = await prisma_1.prisma.firstAidKit.update({
            where: { kitId: req.params.id },
            data
        });
        res.json(updated);
    }
    catch (error) {
        console.error('Error updating equipment:', error);
        res.status(500).json({ error: 'Failed to update equipment' });
    }
});
exports.default = router;
