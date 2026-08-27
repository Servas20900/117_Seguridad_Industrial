import { pillGroup, badgePillAccent, badgePillStandard } from '../styles/classNames'

interface PillGroupProps {
  items: string[]
  variant?: 'accent' | 'standard'
}

export default function PillGroup({ items, variant = 'accent' }: PillGroupProps) {
  const pillClass = variant === 'standard' ? badgePillStandard : badgePillAccent

  return (
    <div className={pillGroup}>
      {items.map((item, idx) => (
        <span key={idx} className={pillClass}>
          {item}
        </span>
      ))}
    </div>
  )
}
