import { useState } from 'react'
import SafeImage from './SafeImage'

interface ImageCarouselProps {
  images: string[]
  alt: string
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!images || images.length === 0) return null

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const currentImage = images[currentIndex]

  return (
    <div style={{ position: 'relative', marginBottom: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <SafeImage
          src={currentImage.startsWith('/') ? currentImage : currentImage}
          alt={alt}
          width={600}
          height={280}
          style={{
            width: '100%',
            maxWidth: '600px',
            height: '280px',
            borderRadius: 'var(--radius-md)',
            objectFit: 'cover',
            display: 'block'
          }}
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0, 0, 0, 0.5)',
              border: 'none',
              color: 'white',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              transition: 'background 160ms ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)')}
            aria-label="Anterior"
          >
            ‹
          </button>

          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0, 0, 0, 0.5)',
              border: 'none',
              color: 'white',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              transition: 'background 160ms ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)')}
            aria-label="Siguiente"
          >
            ›
          </button>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '6px',
              marginTop: '12px'
            }}
          >
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  border: 'none',
                  background: idx === currentIndex ? 'var(--accent)' : 'var(--border)',
                  cursor: 'pointer',
                  transition: 'background 160ms ease'
                }}
                aria-label={`Ir a imagen ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
