"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const courses_js_1 = __importDefault(require("./routes/courses.js"));
const health_js_1 = __importDefault(require("./routes/health.js"));
const equipment_js_1 = __importDefault(require("./routes/equipment.js"));
const about_js_1 = __importDefault(require("./routes/about.js"));
const auth_js_1 = __importDefault(require("./routes/auth.js"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// API routes
app.use('/api/auth', auth_js_1.default);
app.use('/api/courses', courses_js_1.default);
app.use('/api/health', health_js_1.default);
app.use('/api/equipment', equipment_js_1.default);
app.use('/api/about', about_js_1.default);
app.get('/api/health-check', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});
// Serve static files in production
if (process.env.NODE_ENV === 'production') {
    const distPath = path_1.default.join(__dirname, '../../dist');
    console.log('🚀 Serving static files from:', distPath);
    app.use(express_1.default.static(distPath));
    // All other routes should serve the React app
    app.use((req, res) => {
        if (!req.path.startsWith('/api')) {
            res.sendFile(path_1.default.join(distPath, 'index.html'));
        }
    });
}
app.listen(PORT, () => {
    console.log(` Server running on http://localhost:${PORT}`);
    console.log(` Environment: ${process.env.NODE_ENV || 'development'}`);
});
