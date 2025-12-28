# 117 Seguridad Industrial — Web (Vite + React)

Sitio single-page con React y Vite, modo claro/oscuro, cards de cursos con modal de detalle, secciones de Salud Ocupacional, Equipamiento, Logos y Contacto.

## Requisitos
- Node.js 18+

## Comandos
```bash
npm install
npm run dev
npm run build
npm run preview
```

## Estructura
- `index.html`: punto de entrada Vite
- `src/main.tsx`: arranque React
- `src/App.tsx`: layout y secciones
- `src/components/`: `CourseCard`, `CourseModal`
- `src/data/courses.ts`: datos de cursos
- `src/styles.css`: estilos y tema

## Notas
- El formulario de contacto es demostrativo (sin backend). Puede conectarse a Formspree o un endpoint propio.
- La sección "Logos" está lista para subir assets reales.
