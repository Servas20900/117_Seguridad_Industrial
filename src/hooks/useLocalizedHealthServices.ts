import { useTranslation } from 'react-i18next'
import { healthServices } from '../data/healthServices'
import type { HealthService } from '../types/entities'

export default function useLocalizedHealthServices(): HealthService[] {
  const { t } = useTranslation('healthServices')
  const { t: tCommon } = useTranslation('common')

  return healthServices.map((service) => ({
    ...service,
    category: t(`categories.${service.category}`, { defaultValue: service.category }),
    modality: service.modality
      ? tCommon(`modalities.${service.modality}`, { defaultValue: service.modality })
      : service.modality,
    title: t(`items.${service.id}.title`, { defaultValue: service.title }),
    scope: t(`items.${service.id}.scope`, { defaultValue: service.scope }),
    includes: t(`items.${service.id}.includes`, { returnObjects: true, defaultValue: service.includes }) as string[],
    benefits: t(`items.${service.id}.benefits`, { returnObjects: true, defaultValue: service.benefits }) as string[],
    pills: t(`items.${service.id}.pills`, { returnObjects: true, defaultValue: service.pills }) as string[],
    standards: service.standards?.map((standard) =>
      tCommon(`standards.${standard}`, { defaultValue: standard })
    )
  }))
}
