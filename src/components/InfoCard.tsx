import { ReactNode } from 'react'
import { infoStatCard, infoStatCardHighlighted, infoStatLabel, infoStatValue } from '../styles/classNames'

interface InfoCardProps {
  label: string
  value: string | ReactNode
  highlighted?: boolean
}

export default function InfoCard({ label, value, highlighted = false }: InfoCardProps) {
  return (
    <div className={`${infoStatCard} ${highlighted ? infoStatCardHighlighted : ''}`}>
      <p className={infoStatLabel}>{label}</p>
      <p className={infoStatValue}>{value}</p>
    </div>
  )
}
