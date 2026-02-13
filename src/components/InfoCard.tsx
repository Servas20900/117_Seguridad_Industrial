import { ReactNode } from 'react'

interface InfoCardProps {
  label: string
  value: string | ReactNode
  highlighted?: boolean
}

export default function InfoCard({ label, value, highlighted = false }: InfoCardProps) {
  return (
    <div className={`info-card ${highlighted ? 'highlighted' : ''}`}>
      <p className="info-card-label">{label}</p>
      <p className="info-card-value">{value}</p>
    </div>
  )
}
