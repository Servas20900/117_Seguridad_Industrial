# 117 Seguridad Industrial

Plataforma web integral para la gestión y comercialización de servicios de seguridad industrial, capacitación empresarial y equipamiento de emergencia en Costa Rica.

## Descripción del Proyecto

117 Seguridad Industrial es una solución digital completa que permite a la empresa presentar, gestionar y comercializar sus servicios de forma eficiente. La plataforma incluye un sitio web público con catálogo de cursos, servicios de salud ocupacional, equipamiento de emergencia, y un panel administrativo para gestionar el contenido dinámicamente.

## Características Principales

### Para Visitantes

- Navegación intuitiva por diferentes servicios ofrecidos
- Catálogo de cursos de capacitación con detalles completos
- Información sobre servicios de salud ocupacional
- Galería de equipamiento disponible con carruseles de imágenes
- Información sobre material didáctico
- Formulario de contacto directo
- Integración con WhatsApp para consultas rápidas
- Tema claro/oscuro para mejor experiencia de usuario

### Para Administradores

- Panel administrativo protegido con autenticación
- Gestión de imágenes de cursos
- Gestión de imágenes de servicios de salud
- Gestión de carruseles de equipamiento
- Gestión de galería de material didáctico
- Sesiones seguras con expiración de 24 horas
- Actualización de contenido sin reiniciar la aplicación

## Stack Tecnológico

### Frontend

- React 18.3.1 con TypeScript
- Vite 5.4.21 para compilación y desarrollo rápido
- React Router v6 para navegación
- Zustand para gestión de estado (autenticación)
- react-ga4 para análisis con Google Analytics 4
- CSS personalizado con sistema de temas (light/dark)
- Fontawesome para iconografía

### Backend

- Node.js con Express 5.2.1
- TypeScript para tipado estático
- Prisma 5.22.0 como ORM
- PostgreSQL 15 como base de datos
- CORS habilitado para comunicación con frontend

### Infraestructura

- Docker Compose para containerización
- Base de datos PostgreSQL en contenedor
- Nodemon para desarrollo con hot reload
- Concurrently para ejecutar dev y server simultáneamente

## Arquitectura

### Estructura de Carpetas

```
src/
  pages/              # Páginas principales de la aplicación
  components/         # Componentes reutilizables
  routes/             # Configuración de rutas
  stores/             # Estado global (Zustand)
  utils/              # Funciones utilitarias y analytics
  assets/             # Recursos estáticos
  styles.css          # Estilos globales

server/
  routes/             # Rutas de API (cursos, salud, equipamiento, sobre, autenticación)
  lib/                # Configuración de Prisma
  index.ts            # Servidor Express principal
  seed.ts             # Script para poblar base de datos

prisma/
  schema.prisma       # Definición de modelos de datos
  migrations/         # Historial de cambios en base de datos
```

### Modelos de Datos

1. **Course** - Información de cursos de capacitación
2. **HealthService** - Servicios de salud ocupacional
3. **FirstAidKit** - Equipamiento de emergencia
4. **Galleries** - Imágenes de material didáctico

## Cómo Funciona

### Flujo de Usuario Visitante

1. Usuario accede a la página inicio
2. Navega por secciones (Cursos, Salud Ocupacional, Equipamiento)
3. Abre modales con detalles de cada servicio
4. Ve imágenes, especificaciones y opciones de contacto
5. Puede hacer clic en botones de WhatsApp o usar el formulario de contacto
6. Todas las acciones se registran en Google Analytics

### Flujo de Usuario Administrador

1. Accede a `/admin-login`
2. Ingresa credenciales (usuario y contraseña)
3. Backend valida las credenciales
4. Se genera token de sesión seguro
5. Token se almacena en localStorage
6. Accede a `/admin-117` con panel de administración
7. Puede editar imágenes de cada categoría
8. Los cambios se guardan en la base de datos PostgreSQL
9. El frontend se actualiza automáticamente
10. Cierra sesión para eliminar token

## Cómo Ejecutar

### Requisitos Previos

- Node.js 18 o superior
- Docker y Docker Compose
- npm

### Instalación

1. Clonar el repositorio
2. Instalar dependencias:
   ```
   npm install
   ```

3. Crear archivo `.env` con variables requeridas:
   ```
   VITE_CLOUDINARY_CLOUD_NAME=tu_cloud_name
   VITE_WEB3FORMS=tu_api_key
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   DATABASE_URL=postgresql://admin:admin123@localhost:5432/seguridad_industrial?schema=public
   PORT=3001
   NODE_ENV=development
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=admin123
   ```

### Ejecutar la Aplicación

#### Opción 1: Desarrollo Completo (Frontend + Backend)

```
npm run dev:full
```

Esto inicia:
- Vite dev server en http://localhost:5173
- Express server en http://localhost:3001

#### Opción 2: Solo Frontend

```
npm run dev
```

#### Opción 3: Solo Backend

```
npm run server
```

### Base de Datos

1. Iniciar Docker:
   ```
   docker-compose up -d
   ```

2. Ejecutar migraciones:
   ```
   npm run db:migrate
   ```

3. Poblar datos iniciales:
   ```
   npm run db:seed
   ```

4. Ver interfaz Prisma Studio:
   ```
   npm run db:studio
   ```

## Endpoints de API

### Autenticación

- `POST /api/auth/login` - Autenticar usuario
- `POST /api/auth/verify` - Verificar sesión válida
- `POST /api/auth/logout` - Cerrar sesión

### Cursos

- `GET /api/courses` - Obtener todos los cursos
- `PUT /api/courses/:id` - Actualizar imagen de curso

### Salud Ocupacional

- `GET /api/health` - Obtener todos los servicios de salud
- `PUT /api/health/:id` - Actualizar imagen de servicio

### Equipamiento

- `GET /api/equipment` - Obtener equipamiento
- `PUT /api/equipment/:id` - Actualizar imágenes de equipamiento

### Material Didáctico

- `GET /api/about` - Obtener galerías
- `PUT /api/about/:id` - Actualizar imágenes de galería

## Autenticación

### Panel Admin

- URL: `/admin-login`
- Credenciales por defecto: usuario `admin`, contraseña `admin123`
- Las credenciales se configuran en `.env` (variables `ADMIN_USERNAME` y `ADMIN_PASSWORD`)
- Validación ocurre en el backend (Express)
- Tokens expiran después de 24 horas
- Sesión se almacena en localStorage en el cliente

### Seguridad

- Contraseñas se validan en el servidor
- Tokens únicos por sesión
- CORS habilitado para comunicación controlada
- Las rutas del panel están protegidas con `ProtectedRoute`

## Google Analytics 4

La aplicación incluye integración completa con GA4 para trackear:

- Vistas de página (automático en cada ruta)
- Vistas de cursos
- Vistas de servicios de salud
- Vistas de equipamiento
- Clics en WhatsApp
- Envíos de formulario de contacto
- Navegación entre secciones

Para configurar:
1. Obtener Measurement ID de Google Analytics Console (formato: G-XXXXXXXXXX)
2. Agregar a `.env`: `VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
3. Los eventos aparecerán en Google Analytics en tiempo real

## Variables de Entorno

```env
# Frontend - Cloudinary
VITE_CLOUDINARY_CLOUD_NAME=nombre_de_cloud

# Frontend - Formulario Web3Forms
VITE_WEB3FORMS=api_key

# Frontend - Google Analytics 4
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Backend - Base de datos
DATABASE_URL=postgresql://usuario:contraseña@host:puerto/database

# Backend - Servidor
PORT=3001
NODE_ENV=development

# Backend - Admin
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
```

## Gestión de Imágenes

Las imágenes se almacenan en Cloudinary, lo que permite:

- Subida rápida de nuevas imágenes
- Optimización automática
- CDN global para entrega rápida
- Almacenamiento seguro

El flujo:
1. Administrador captura URL de imagen en Cloudinary
2. Pega la URL en el campo de edición
3. Se guarda en PostgreSQL
4. Se muestra en tiempo real en la web

## Deployment

### Digital Ocean App Platform

La aplicación está configurada para desplegarse en Digital Ocean con un solo servicio que maneja tanto frontend como backend.

#### Configuración en Digital Ocean:

1. **Crear Base de Datos PostgreSQL** en Digital Ocean
2. **Conectar el repositorio GitHub** a Digital Ocean App Platform
3. **Configurar variables de entorno** en Digital Ocean Dashboard:
   ```
   NODE_ENV=production
   DATABASE_URL=tu_database_url_de_digital_ocean
   PORT=3001
   ADMIN_USERNAME=tu_usuario_admin
   ADMIN_PASSWORD=tu_password_seguro
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   VITE_CLOUDINARY_CLOUD_NAME=tu_cloud_name
   VITE_WEB3FORMS=tu_api_key
   ```

4. **La configuración de deploy está en** [.do/app.yaml](.do/app.yaml)

#### Para Actualizar en Producción:

```bash
# 1. Hacer commit de los cambios
git add .
git commit -m "Fix: Unified frontend and backend in single service"
git push origin main

# 2. Digital Ocean auto-despliega con:
#    Build: npm run build
#    Run: npm start
```

El build automáticamente:
- Genera el cliente Prisma
- Compila el frontend con Vite
- Transpila el backend TypeScript
- Despliega migraciones de base de datos

#### Verificar Deploy:

1. Visita tu URL de Digital Ocean
2. Verifica que las APIs funcionan: `https://tu-app.ondigitalocean.app/api/health-check`
3. Verifica que el frontend carga correctamente

### Otros Servicios de Hosting

La aplicación también puede deployarse en:
- Vercel (Frontend) + Railway (Backend)
- Heroku
- AWS
- Render

Para build manual:
```bash
npm run build
npm start
```

## Mantenimiento

- Las credenciales admin deben cambiarse regularmente
- Revisar logs de Google Analytics para entender el comportamiento de usuarios
- Hacer backups regulares de la base de datos PostgreSQL
- Actualizar dependencias periódicamente

## Soporte y Contacto

Para consultas o soporte sobre los servicios:
- Teléfono: (506) 8805-3660 / (506) 8874-9761
- Email: info@117securityindustrial.com
- WhatsApp: Disponible en la web

Para issues técnicos del repositorio, contactar al equipo de desarrollo.
