# Añadir nuevos cursos o equipamiento

## 1. Preparar la imagen
- Tamaño recomendado: 1200×800px o similar (ratio 3:2 o 4:3)
- Formato: JPG, PNG, WebP (Cloudinary optimiza automáticamente)
- Peso: no te preocupes, Cloudinary comprime

## 2. Subir a Cloudinary
1. Entra a [Cloudinary Media Library](https://cloudinary.com/console/media_library)
2. Navega a la carpeta `117/courses` (o `117/equipment`)
3. Arrastra y suelta la imagen
4. Copia el **Public ID** (ej: `117/courses/primeros-auxilios-basicos`)

## 3. Editar el archivo de datos

### Para cursos: `src/data/courses.ts`
```typescript
{
  id: 'nuevo-curso',
  title: 'Título del curso',
  accreditation: 'Tipo de acreditación',
  duration: 'Duración: X horas',
  minimum: 'Mínimo: Y personas',
  modality: 'En sitio',
  summary: 'Descripción breve del curso',
  topics: [
    'Tema 1',
    'Tema 2',
    'Tema 3'
  ],
  pills: ['Etiqueta 1', 'Etiqueta 2'],
  image: '117/courses/nuevo-curso' // <-- Public ID de Cloudinary
}
```

### Para equipamiento: crea `src/data/equipment.ts` (similar)
```typescript
export type Equipment = {
  id: string
  name: string
  category: string
  description: string
  features: string[]
  image?: string
}

export const equipment: Equipment[] = [
  {
    id: 'extintor-pqs',
    name: 'Extintor PQS 10 lbs',
    category: 'Contra incendios',
    description: 'Extintor de polvo químico seco multipropósito.',
    features: ['ABC', '10 libras', 'Recargable'],
    image: '117/equipment/extintor-pqs'
  }
]
```

## 4. Commit y push
```bash
git add src/data/
git commit -m "feat(content): agregar curso/equipamiento X"
git push
```

Vercel re-deploya automáticamente en ~2 minutos.

---

**Importante:** No necesitas tocar código, solo editar el archivo de datos y subir la imagen a Cloudinary.
