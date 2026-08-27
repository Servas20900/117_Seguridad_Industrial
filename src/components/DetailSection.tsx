import { ReactNode } from 'react'
import { detailSectionWrap, detailSectionTitle, detailSectionContent } from '../styles/classNames'

interface DetailSectionProps {
  title: string
  children: ReactNode
  className?: string
}

export default function DetailSection({ title, children, className = '' }: DetailSectionProps) {
  return (
    <div className={`${detailSectionWrap} ${className}`}>
      <h2 className={detailSectionTitle}>{title}</h2>
      <div className={detailSectionContent}>
        {children}
      </div>
    </div>
  )
}
