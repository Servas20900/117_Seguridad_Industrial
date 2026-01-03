export interface Course {
  id: string
  title: string
  category: string
  accreditation: string
  duration: string
  minimum: string
  modality?: string
  summary: string
  topics: string[]
  pills: string[]
  image?: string
}

export interface HealthService {
  id: string
  title: string
  category: string
  standards?: string[]
  modality?: string
  scope?: string
  includes?: string[]
  benefits?: string[]
  pills: string[]
  image?: string
}

export interface EquipmentItem {
  id: string
  title: string
  category: string
  description: string
  contents: Array<{ section: string; items: string[] }>
  benefits?: string[]
  pills: string[]
  images: string[]
}
