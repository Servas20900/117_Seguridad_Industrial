"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// Simple in-memory session store (in production, use a database)
const sessions = new Map();
// Admin credentials from environment variables
const ADMIN_USER = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
// Generate simple session token
function generateToken() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400).json({ error: 'Usuario y contraseña requeridos' });
        return;
    }
    if (username === ADMIN_USER && password === ADMIN_PASSWORD) {
        const token = generateToken();
        sessions.set(token, { createdAt: Date.now() });
        res.json({
            success: true,
            token,
            message: 'Autenticación exitosa'
        });
    }
    else {
        res.status(401).json({
            error: 'Usuario o contraseña inválidos'
        });
    }
});
router.post('/verify', (req, res) => {
    const { token } = req.body;
    if (!token || !sessions.has(token)) {
        res.status(401).json({ error: 'Sesión inválida' });
        return;
    }
    // Check if token is still valid (24 hours)
    const session = sessions.get(token);
    const isExpired = Date.now() - session.createdAt > 24 * 60 * 60 * 1000;
    if (isExpired) {
        sessions.delete(token);
        res.status(401).json({ error: 'Sesión expirada' });
        return;
    }
    res.json({ valid: true });
});
router.post('/logout', (req, res) => {
    const { token } = req.body;
    if (token && sessions.has(token)) {
        sessions.delete(token);
    }
    res.json({ success: true });
});
exports.default = router;
