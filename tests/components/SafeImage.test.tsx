import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import SafeImage from '../../src/components/SafeImage'

describe('SafeImage Component', () => {
  it('should render image with correct src', () => {
    render(<SafeImage src="https://example.com/image.jpg" alt="test" />)
    const img = screen.getByAltText('test') as HTMLImageElement
    expect(img.src).toBe('https://example.com/image.jpg')
  })

  it('should render placeholder when image src is not provided', () => {
    render(<SafeImage src="" alt="placeholder" />)
    const container = screen.getByAltText('placeholder').parentElement
    expect(container).toHaveStyle({ display: 'flex' })
  })

  it('should apply custom className', () => {
    const { container } = render(
      <SafeImage src="test.jpg" alt="test" className="custom-class" />
    )
    const img = container.querySelector('img')
    expect(img).toHaveClass('custom-class')
  })
})
