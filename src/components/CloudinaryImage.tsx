type CloudinaryImageProps = {
  publicId: string
  alt: string
  width?: number
  height?: number
  crop?: 'fill' | 'fit' | 'scale' | 'pad'
  quality?: 'auto' | number
  className?: string
  style?: React.CSSProperties
}

/**
 * Optimized Cloudinary image component with automatic format/quality and responsive srcset.
 * 
 * @param publicId - Cloudinary public ID (e.g., '117/logos/logo-negro-amarillo')
 * @param alt - Alt text for accessibility
 * @param width - Target width (optional, defaults to auto)
 * @param height - Target height (optional, defaults to auto)
 * @param crop - Crop/resize mode (default: 'fill')
 * @param quality - Image quality (default: 'auto')
 */
export default function CloudinaryImage({
  publicId,
  alt,
  width,
  height,
  crop = 'fill',
  quality = 'auto',
  className,
  style,
}: CloudinaryImageProps) {
  // Replace with your Cloudinary cloud name
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'demo'

  const buildUrl = (w?: number, h?: number, q: string | number = quality) => {
    const transforms = [
      'f_auto', // Auto format (WebP/AVIF when supported)
      `q_${q}`, // Quality
      crop && `c_${crop}`, // Crop mode
      w && `w_${w}`, // Width
      h && `h_${h}`, // Height
    ]
      .filter(Boolean)
      .join(',')

    return `https://res.cloudinary.com/${cloudName}/image/upload/${transforms}/${publicId}`
  }

  // Generate responsive srcset
  const srcSet =
    width && !height
      ? [
          `${buildUrl(Math.round(width * 0.5))} ${Math.round(width * 0.5)}w`,
          `${buildUrl(width)} ${width}w`,
          `${buildUrl(Math.round(width * 1.5))} ${Math.round(width * 1.5)}w`,
          `${buildUrl(Math.round(width * 2))} ${Math.round(width * 2)}w`,
        ].join(', ')
      : undefined

  return (
    <img
      src={buildUrl(width, height)}
      srcSet={srcSet}
      sizes={width ? `(max-width: ${width}px) 100vw, ${width}px` : undefined}
      alt={alt}
      loading="lazy"
      className={className}
      style={style}
    />
  )
}
