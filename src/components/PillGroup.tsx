interface PillGroupProps {
  items: string[]
  variant?: 'accent' | 'standard'
}

export default function PillGroup({ items, variant = 'accent' }: PillGroupProps) {
  return (
    <div className="pill-group">
      {items.map((item, idx) => (
        <span key={idx} className={`pill pill-${variant}`}>
          {item}
        </span>
      ))}
    </div>
  )
}
