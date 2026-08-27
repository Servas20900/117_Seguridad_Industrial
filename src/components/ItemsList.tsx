import { itemsList, itemsListItemDefault, itemsListItemAccent, itemsListItemSubtle } from '../styles/classNames'

interface ItemsListProps {
  items: string[]
  variant?: 'default' | 'accent' | 'subtle'
}

const variantClass = {
  default: itemsListItemDefault,
  accent: itemsListItemAccent,
  subtle: itemsListItemSubtle
}

export default function ItemsList({ items, variant = 'default' }: ItemsListProps) {
  return (
    <ul className={itemsList}>
      {items.map((item, idx) => (
        <li key={idx} className={variantClass[variant]}>
          {item}
        </li>
      ))}
    </ul>
  )
}
