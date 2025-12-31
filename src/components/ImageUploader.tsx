import { useEffect, useRef } from 'react'

interface ImageUploaderProps {
  currentImage?: string
  onImageUploaded: (url: string) => void
  folder?: string
  buttonText?: string
  showPreview?: boolean
}

declare global {
  interface Window {
    cloudinary: any
  }
}

export default function ImageUploader({
  currentImage,
  onImageUploaded,
  folder = '117',
  buttonText = 'Subir Imagen',
  showPreview = true
}: ImageUploaderProps) {
  const cloudinaryRef = useRef<any>()
  const widgetRef = useRef<any>()

  useEffect(() => {
    // Cargar el script de Cloudinary si no está cargado
    if (!document.getElementById('cloudinary-upload-widget')) {
      const script = document.createElement('script')
      script.id = 'cloudinary-upload-widget'
      script.src = 'https://upload-widget.cloudinary.com/global/all.js'
      script.async = true
      document.body.appendChild(script)

      script.onload = () => {
        cloudinaryRef.current = window.cloudinary
      }
    } else {
      cloudinaryRef.current = window.cloudinary
    }
  }, [])

  const openWidget = () => {
    if (!cloudinaryRef.current) {
      alert('Cargando el widget, intenta de nuevo en un momento...')
      return
    }

    // Crear el widget si no existe
    if (!widgetRef.current) {
      widgetRef.current = cloudinaryRef.current.createUploadWidget(
        {
          cloudName: 'dcwxslhjf',
          uploadPreset: 'unsigned_preset',
          folder: folder,
          multiple: false,
          maxFiles: 1,
          resourceType: 'image',
          clientAllowedFormats: ['png', 'jpg', 'jpeg', 'webp', 'gif'],
          maxFileSize: 10000000, // 10MB
          sources: ['local', 'url', 'camera'],
          showAdvancedOptions: false,
          cropping: false,
          publicId: undefined,
          styles: {
            palette: {
              window: '#ffffff',
              windowBorder: '#e6e8ed',
              tabIcon: '#f4c542',
              menuIcons: '#0f1115',
              textDark: '#0f1115',
              textLight: '#f4f6fb',
              link: '#f4c542',
              action: '#f4c542',
              inactiveTabIcon: '#b3b7c2',
              error: '#dc2626',
              inProgress: '#f4c542',
              complete: '#10b981',
              sourceBg: '#f7f8fa'
            },
            fonts: {
              default: null,
              "'Space Grotesk', system-ui": {
                url: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap',
                active: true
              }
            }
          }
        },
        (error: any, result: any) => {
          if (!error && result && result.event === 'success') {
            console.log('Imagen subida:', result.info.secure_url)
            onImageUploaded(result.info.secure_url)
          }
          if (error) {
            console.error('Error subiendo imagen:', error)
            alert('Error al subir la imagen. Intenta de nuevo.')
          }
        }
      )
    }

    widgetRef.current.open()
  }

  return (
    <div>
      <button
        type="button"
        onClick={openWidget}
        style={{
          padding: '12px 20px',
          backgroundColor: 'var(--accent)',
          color: '#0b0c10',
          border: 'none',
          borderRadius: 'var(--radius-md)',
          cursor: 'pointer',
          fontWeight: '600',
          fontSize: '1rem',
          marginBottom: '16px',
          transition: 'transform 0.2s, box-shadow 0.2s',
          boxShadow: '0 4px 12px rgba(0, 255, 200, 0.2)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)'
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 255, 200, 0.3)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 255, 200, 0.2)'
        }}
      >
        {buttonText}
      </button>

      {showPreview && currentImage && (
        <div style={{ marginTop: '16px' }}>
          <p style={{ marginBottom: '12px', fontSize: '0.95rem', color: 'var(--text-subtle)' }}>
            Vista previa:
          </p>
          <img
            src={currentImage}
            alt="preview"
            style={{
              maxWidth: '100%',
              maxHeight: '300px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
      )}
    </div>
  )
}
