import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import SafeImage from '../../src/components/SafeImage'

describe('SafeImage Component', () => {
  it('should render image with correct src', () => {
    render(<SafeImage src="https://example.com/image.jpg" alt="test" />)
    const img = screen.getByAltText('test') as HTMLImageElement
    expect(img.src).toBe('https://example.com/image.jpg')
  })

  it('should render error placeholder when image src is not provided', () => {
    const { container } = render(<SafeImage src="" alt="placeholder" />)
    const errorDiv = container.querySelector('[aria-label*="Error al cargar imagen"]')
    expect(errorDiv).toBeTruthy()
    expect(errorDiv?.textContent).toContain('Error al cargar imagen')
  })

  it('should apply custom className to image', () => {
    const { container } = render(
      <SafeImage src="test.jpg" alt="test" className="custom-class" />
    )
    const img = container.querySelector('img')
    expect(img?.className).toContain('custom-class')
  })
})
