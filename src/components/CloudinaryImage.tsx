import SafeImage, { type SafeImageProps } from './SafeImage'

type CloudinaryImageProps = Omit<SafeImageProps, 'publicId' | 'src'> & {
  publicId: string
}

// Backward-compatible wrapper that now leverages SafeImage (with error placeholder).
export default function CloudinaryImage({ publicId, alt, width, height, crop, quality, className, style }: CloudinaryImageProps) {
  return (
    <SafeImage
      publicId={publicId}
      alt={alt}
      width={width}
      height={height}
      crop={crop}
      quality={quality}
      className={className}
      style={style}
    />
  )
}
