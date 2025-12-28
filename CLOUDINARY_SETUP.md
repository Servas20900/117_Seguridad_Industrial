# Guía de Cloudinary para 117 Seguridad Industrial

## 1. Crear cuenta en Cloudinary

1. Ve a [cloudinary.com](https://cloudinary.com) y crea una cuenta gratuita (Free tier: 25 GB de almacenamiento y 25 GB de transformaciones/mes).
2. Una vez registrado, accede a tu dashboard y anota tu **Cloud Name** (lo verás en la URL o en Settings > Account).

## 2. Configurar el proyecto

### En el archivo `.env` (raíz del proyecto)
Crea un archivo `.env` (si no existe) y agrega:

```env
VITE_CLOUDINARY_CLOUD_NAME=tu-cloud-name
```

Reemplaza `tu-cloud-name` con el nombre que obtuviste en el dashboard.

### En `.gitignore`
Asegúrate de que `.env` esté en `.gitignore` para no subir credenciales:

```
.env
.env.local
```

### En Vercel (producción)
1. Ve a tu proyecto en Vercel > Settings > Environment Variables.
2. Agrega `VITE_CLOUDINARY_CLOUD_NAME` con tu cloud name.
3. Re-deploy para que tome efecto.

## 3. Estructura de carpetas en Cloudinary

Organiza tus imágenes en carpetas según tipo:

```
117/
├── logos/
│   ├── logo-negro-amarillo
│   ├── logo-negro-blanco
│   └── logo-landing
├── courses/
│   ├── primeros-auxilios-basicos
│   ├── extintores
│   └── hazmat
└── equipment/
    ├── botiquin-basico
    ├── extintor-pqs
    └── dea-zoll
```

## 4. Subir imágenes

### Opción A: Dashboard web
1. Entra a Cloudinary > Media Library.
2. Crea carpetas (ej: `117/logos`).
3. Arrastra y suelta las imágenes.
4. Copia el **Public ID** (ej: `117/logos/logo-negro-amarillo`).

### Opción B: Drag & drop directo
- Puedes arrastrar archivos directamente al Media Library.
- Cloudinary optimiza automáticamente (comprime y detecta el mejor formato: WebP, AVIF).

### Opción C: Upload API (avanzado, futuro)
Si necesitas subir desde el frontend (ej: panel de admin), usa el [Upload Widget](https://cloudinary.com/documentation/upload_widget) o la API con signed uploads.

## 5. Usar imágenes en el código

### En datos estáticos (`src/data/courses.ts`)
Agrega un campo `image` con el Public ID:

```typescript
export type Course = {
  // ... campos existentes
  image?: string // Public ID de Cloudinary
}

export const courses: Course[] = [
  {
    id: 'pab',
    title: 'Primeros Auxilios Básicos, RCP & DEA',
    image: '117/courses/primeros-auxilios-basicos', // <-- Public ID
    // ... resto de datos
  },
]
```

### En componentes
Usa `CloudinaryImage` en lugar de `<img>`:

```tsx
import CloudinaryImage from '../components/CloudinaryImage'

<CloudinaryImage
  publicId="117/courses/primeros-auxilios-basicos"
  alt="Curso de Primeros Auxilios"
  width={400}
  crop="fill"
/>
```

### En logos con tema (HomePage, Topbar)
Reemplaza las importaciones locales por Public IDs:

```tsx
const logoPublicId = theme === 'dark'
  ? '117/logos/logo-negro-amarillo'
  : '117/logos/logo-negro-blanco'

<CloudinaryImage
  publicId={logoPublicId}
  alt="117 Seguridad Industrial"
  width={240}
/>
```

## 6. Ventajas de Cloudinary

✅ **Optimización automática:** WebP/AVIF según navegador, compresión inteligente.  
✅ **Responsive:** Genera múltiples tamaños con `srcset` automático.  
✅ **CDN global:** Entrega veloz desde servidores cercanos al usuario.  
✅ **Transformaciones on-the-fly:** Crop, resize, filtros, sin editar la imagen original.  
✅ **Sin servidor:** No necesitas backend; acceso directo vía URL.

## 7. Workflow recomendado

1. **Diseñador/fotógrafo sube imágenes** al Media Library de Cloudinary.
2. **Copia el Public ID** de la imagen.
3. **Edita `src/data/courses.ts`** (o el archivo que corresponda) y pega el Public ID en el campo `image`.
4. **Commit y push** a GitHub; Vercel re-deploya automáticamente.

## 8. Ejemplo completo

### Antes (estático con import)
```tsx
import imgPAB from '../assets/courses/pab.jpg'

<img src={imgPAB} alt="PAB" />
```

### Después (Cloudinary)
```tsx
import CloudinaryImage from '../components/CloudinaryImage'

<CloudinaryImage
  publicId="117/courses/primeros-auxilios-basicos"
  alt="Primeros Auxilios Básicos"
  width={600}
  height={400}
  crop="fill"
  quality="auto"
/>
```

---

**¿Dudas?** Revisa la [documentación oficial](https://cloudinary.com/documentation) o pregúntame.
