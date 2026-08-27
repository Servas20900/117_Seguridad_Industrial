import { useTranslation } from 'react-i18next'
import { equipmentItems } from '../data/equipment'
import type { EquipmentItem } from '../types/entities'

export default function useLocalizedEquipment(): EquipmentItem[] {
  const { t } = useTranslation('equipment')

  return equipmentItems.map((item) => ({
    ...item,
    category: t(`categories.${item.category}`, { defaultValue: item.category }),
    title: t(`items.${item.id}.title`, { defaultValue: item.title }),
    description: t(`items.${item.id}.description`, { defaultValue: item.description }),
    contents: item.contents.map((section) => ({
      section: t(`items.${item.id}.sections.${section.section}.title`, { defaultValue: section.section }),
      items: t(`items.${item.id}.sections.${section.section}.items`, {
        returnObjects: true,
        defaultValue: section.items
      }) as string[]
    })),
    benefits: t(`items.${item.id}.benefits`, { returnObjects: true, defaultValue: item.benefits }) as string[],
    pills: t(`items.${item.id}.pills`, { returnObjects: true, defaultValue: item.pills }) as string[]
  }))
}
