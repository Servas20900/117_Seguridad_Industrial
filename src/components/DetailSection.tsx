import { ReactNode } from 'react'

interface DetailSectionProps {
  title: string
  children: ReactNode
  className?: string
}

export default function DetailSection({ title, children, className = '' }: DetailSectionProps) {
  return (
    <div className={`detail-section ${className}`}>
      <h2 className="detail-section-title">{title}</h2>
      <div className="detail-section-content">
        {children}
      </div>
    </div>
  )
}
