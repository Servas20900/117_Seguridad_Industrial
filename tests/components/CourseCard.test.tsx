import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import CourseCard from '../../src/components/CourseCard'

// Helper para envolver con Router (necesario por react-router-dom)
const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>)
}

describe('CourseCard Component', () => {
  const mockCourse = {
    id: 'curso-1',
    title: 'Seguridad Industrial Básica',
    category: 'Seguridad',
    image: 'https://example.com/course.jpg',
    pills: ['Básico', 'Obligatorio'],
    accreditation: 'ISO 45001',
    duration: 'Duración: 40 horas',
    minimum: 'Mínimo: 10 personas',
    summary: 'Curso sobre seguridad',
    topics: ['Riesgos', 'Prevención'],
    modality: 'Presencial'
  }
  const noop = () => {}

  it('should render course title', () => {
    renderWithRouter(<CourseCard course={mockCourse} onOpen={noop} programNumber={1} />)
    expect(screen.getByText('Seguridad Industrial Básica')).toBeTruthy()
  })

  it('should render the program badge', () => {
    renderWithRouter(<CourseCard course={mockCourse} onOpen={noop} programNumber={3} />)
    expect(screen.getByText('P3')).toBeTruthy()
  })

  it('should render course metadata', () => {
    renderWithRouter(<CourseCard course={mockCourse} onOpen={noop} programNumber={1} />)
    expect(screen.getByText(/40 horas/)).toBeTruthy()
    expect(screen.getByText('Presencial')).toBeTruthy()
  })

  it('should render course summary', () => {
    renderWithRouter(<CourseCard course={mockCourse} onOpen={noop} programNumber={1} />)
    expect(screen.getByText('Curso sobre seguridad')).toBeTruthy()
  })

  it('should render "Ver detalles" button', () => {
    renderWithRouter(<CourseCard course={mockCourse} onOpen={noop} programNumber={1} />)
    expect(screen.getByText('Ver detalles')).toBeTruthy()
  })

  it('should not crash when duration and minimum are undefined', () => {
    const { duration, minimum, ...rest } = mockCourse
    renderWithRouter(<CourseCard course={rest} onOpen={noop} programNumber={1} />)
    expect(screen.getByText('Seguridad Industrial Básica')).toBeTruthy()
  })
})
