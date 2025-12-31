# Configuración de Cloudinary Upload Preset

Para que el sistema de carga de imágenes funcione correctamente, necesitas crear un **Upload Preset** en Cloudinary:

## Pasos para configurar:

1. **Inicia sesión en Cloudinary**
   - Ve a: https://console.cloudinary.com/

2. **Accede a Settings → Upload**
   - Click en el menú de configuración (⚙️)
   - Selecciona "Upload" en el menú lateral

3. **Crea un nuevo Upload Preset**
   - Scroll down hasta "Upload presets"
   - Click en "Add upload preset"

4. **Configura el preset:**
   - **Preset name:** `unsigned_preset` (o el nombre que prefieras)
   - **Signing Mode:** Selecciona **"Unsigned"** ⚠️ (IMPORTANTE)
   - **Folder:** Puedes dejarlo vacío (la app enviará la carpeta automáticamente)
   - **Upload Manipulations:** Opcional - puedes agregar transformaciones automáticas
   - **Tags:** Opcional

5. **Guarda el preset**
   - Click en "Save"

6. **Actualiza el código (si usaste otro nombre)**
   Si usaste un nombre diferente a `unsigned_preset`, actualiza en:
   
   **src/components/ImageUploader.tsx** línea 54:
   ```typescript
   uploadPreset: 'tu_nombre_de_preset',
   ```

## Estructura de carpetas que se usará:

- **Cursos:** `117/courses/`
- **Salud Ocupacional:** `117/SaludOcupacional/`
- **Botiquines:** `117/Botiquines/`
- **Material Didáctico:** `117/Material didactico/`

## Troubleshooting:

Si recibes error 401 "Unknown API key":
- Verifica que el preset sea **Unsigned**
- Verifica que el Cloud Name sea correcto: `dcwxslhjf`
- Intenta refrescar la página después de crear el preset

## Límites configurados:

- Tamaño máximo: 10MB por imagen
- Formatos permitidos: PNG, JPG, JPEG, WEBP, GIF
- Solo imágenes (no videos u otros archivos)
