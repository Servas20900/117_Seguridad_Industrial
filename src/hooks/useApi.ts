import { useState, useEffect } from 'react'

const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? '/api' : 'http://localhost:3001/api')

export function useCourses() {
  const [courses, setCourses] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(`${API_URL}/courses`)
      .then(res => res.json())
      .then(data => {
        // Transform database format to expected format
        const transformed = data.map((item: any) => ({
          id: item.courseId,
          title: item.title,
          category: item.category,
          accreditation: item.accreditation,
          duration: item.duration,
          minimum: item.minimum,
          modality: item.modality,
          summary: item.summary,
          topics: item.topics,
          pills: item.pills,
          image: item.image
        }))
        setCourses(transformed)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching courses:', err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { courses, loading, error }
}

export function useHealthServices() {
  const [services, setServices] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(`${API_URL}/health`)
      .then(res => res.json())
      .then(data => {
        // Transform database format to expected format
        const transformed = data.map((item: any) => ({
          id: item.serviceId,
          title: item.title,
          category: item.category,
          standards: item.standards,
          modality: item.modality,
          scope: item.scope,
          includes: item.includes,
          benefits: item.benefits,
          pills: item.pills,
          image: item.image
        }))
        setServices(transformed)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching health services:', err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { services, loading, error }
}

export function useEquipment() {
  const [equipment, setEquipment] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(`${API_URL}/equipment`)
      .then(res => res.json())
      .then(data => {
        // Transform database format to expected format
        const transformed = data.map((item: any) => ({
          id: item.kitId,
          title: item.title,
          category: item.category,
          description: item.description,
          contents: item.contents,
          benefits: item.benefits,
          pills: item.pills,
          images: item.images
        }))
        setEquipment(transformed)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching equipment:', err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { equipment, loading, error }
}
