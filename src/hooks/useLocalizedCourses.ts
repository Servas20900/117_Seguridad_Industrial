import { useTranslation } from 'react-i18next'
import { courses } from '../data/courses'
import type { Course } from '../types/entities'

export type LocalizedCourse = Course

export default function useLocalizedCourses(): LocalizedCourse[] {
  const { t } = useTranslation('courses')
  const { t: tCommon } = useTranslation('common')

  return courses.map((course) => ({
    ...course,
    category: t(`categories.${course.category}`, { defaultValue: course.category }),
    modality: course.modality
      ? tCommon(`modalities.${course.modality}`, { defaultValue: course.modality })
      : course.modality,
    accreditation: tCommon(`accreditations.${course.accreditation}`, { defaultValue: course.accreditation }),
    title: t(`items.${course.id}.title`, { defaultValue: course.title }),
    summary: t(`items.${course.id}.summary`, { defaultValue: course.summary }),
    duration: course.duration ? t(`items.${course.id}.duration`, { defaultValue: course.duration }) : course.duration,
    minimum: course.minimum ? t(`items.${course.id}.minimum`, { defaultValue: course.minimum }) : course.minimum,
    price: course.price ? t(`items.${course.id}.price`, { defaultValue: course.price }) : course.price,
    topics: t(`items.${course.id}.topics`, { returnObjects: true, defaultValue: course.topics }) as string[],
    pills: t(`items.${course.id}.pills`, { returnObjects: true, defaultValue: course.pills }) as string[]
  }))
}
