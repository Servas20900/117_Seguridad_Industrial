interface ItemsListProps {
  items: string[]
  variant?: 'default' | 'accent' | 'subtle'
}

export default function ItemsList({ items, variant = 'default' }: ItemsListProps) {
  return (
    <ul className={`items-list items-list-${variant}`}>
      {items.map((item, idx) => (
        <li key={idx} className="items-list-item">
          {item}
        </li>
      ))}
    </ul>
  )
}
