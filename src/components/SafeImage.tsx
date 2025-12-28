import { useMemo, useState } from 'react'
import type { CSSProperties } from 'react'

export type SafeImageProps = {
  src?: string
  publicId?: string
  alt: string
  width?: number
  height?: number
  crop?: 'fill' | 'fit' | 'scale' | 'pad'
  quality?: 'auto' | number
  className?: string
  style?: CSSProperties
}

/**
 * Image helper that supports Cloudinary public IDs or direct URLs and shows an error placeholder on failure.
 */
export default function SafeImage({
  src,
  publicId,
  alt,
  width,
  height,
  crop = 'fill',
  quality = 'auto',
  className,
  style,
}: SafeImageProps) {
  const [errored, setErrored] = useState(false)

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'demo'

  const buildUrl = useMemo(() => {
    return (w?: number, h?: number, q: string | number = quality) => {
      const transforms = [
        'f_auto',
        `q_${q}`,
        crop && `c_${crop}`,
        w && `w_${w}`,
        h && `h_${h}`,
      ]
        .filter(Boolean)
        .join(',')

      return `https://res.cloudinary.com/${cloudName}/image/upload/${transforms}/${publicId}`
    }
  }, [cloudName, crop, publicId, quality])

  const resolvedSrc = publicId ? buildUrl(width, height) : src

  const srcSet = publicId && width && !height
    ? [
        `${buildUrl(Math.round(width * 0.5))} ${Math.round(width * 0.5)}w`,
        `${buildUrl(width)} ${width}w`,
        `${buildUrl(Math.round(width * 1.5))} ${Math.round(width * 1.5)}w`,
        `${buildUrl(Math.round(width * 2))} ${Math.round(width * 2)}w`,
      ].join(', ')
    : undefined

  const sizes = width ? `(max-width: ${width}px) 100vw, ${width}px` : undefined

  const mergedStyle: CSSProperties = {
    width: '100%',
    height: height ? `${height}px` : undefined,
    objectFit: 'cover',
    borderRadius: 'var(--radius-md)',
    ...style,
  }

  if (!resolvedSrc || errored) {
    return (
      <div
        className={className}
        style={{
          ...mergedStyle,
          display: 'grid',
          placeItems: 'center',
          background: 'repeating-linear-gradient(135deg, #1b1d24 0 12px, #2a2d36 12px 24px)',
          color: '#f7f8fa',
          fontWeight: 700,
          textAlign: 'center',
          padding: '12px',
        }}
        role="img"
        aria-label={`Error al cargar imagen: ${alt}`}
      >
        Error al cargar imagen
      </div>
    )
  }

  return (
    <img
      src={resolvedSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading="lazy"
      className={className}
      style={mergedStyle}
      onError={() => setErrored(true)}
    />
  )
}
