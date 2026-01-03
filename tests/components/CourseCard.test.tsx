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
    id: '1',
    courseId: 'curso-1',
    title: 'Seguridad Industrial Básica',
    category: 'Seguridad',
    image: 'https://example.com/course.jpg',
    pills: ['Básico', 'Obligatorio'],
    accreditation: 'ISO 45001',
    duration: '40 horas',
    minimum: '10 personas',
    summary: 'Curso sobre seguridad',
    topics: ['Riesgos', 'Prevención'],
    modality: 'Presencial',
    createdAt: new Date(),
    updatedAt: new Date()
  }

  it('should render course title', () => {
    renderWithRouter(<CourseCard course={mockCourse} />)
    expect(screen.getByText('Seguridad Industrial Básica')).toBeTruthy()
  })

  it('should render "Programa" badge', () => {
    renderWithRouter(<CourseCard course={mockCourse} />)
    expect(screen.getByText('Programa')).toBeTruthy()
  })

  it('should render course metadata', () => {
    renderWithRouter(<CourseCard course={mockCourse} />)
    expect(screen.getByText(/40 horas/)).toBeTruthy()
    expect(screen.getByText(/10 personas/)).toBeTruthy()
    expect(screen.getByText(/Presencial/)).toBeTruthy()
  })

  it('should render course summary', () => {
    renderWithRouter(<CourseCard course={mockCourse} />)
    expect(screen.getByText('Curso sobre seguridad')).toBeTruthy()
  })

  it('should render "Ver detalles" button', () => {
    renderWithRouter(<CourseCard course={mockCourse} />)
    expect(screen.getByText('Ver detalles')).toBeTruthy()
  })
})
