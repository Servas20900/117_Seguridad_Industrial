import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import CourseCard from '../components/CourseCard'
import { trackDownloadCatalog } from '../utils/analytics'
import useLocalizedPath from '../hooks/useLocalizedPath'
import useLocalizedCourses from '../hooks/useLocalizedCourses'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { eyebrow, panel, panelHead, panelHeadTitle, cardGrid, btnPrimary } from '../styles/classNames'

export default function CoursesPage() {
  const { t } = useTranslation('courses')
  useDocumentTitle(t('page.title'))
  const navigate = useNavigate()
  const { path } = useLocalizedPath()
  const courses = useLocalizedCourses()
  const categories = Array.from(new Set(courses.map(course => course.category)))
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const handleCardClick = (courseId: string) => {
    navigate(path(`/courses/${courseId}`))
  }

  const visibleCategories = activeCategory ? [activeCategory] : categories

  return (
    <main>
      <section id="courses" className={panel}>
        <div className={panelHead}>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className={eyebrow}>{t('page.eyebrow')}</p>
              <h2 className={panelHeadTitle}>{t('page.title')}</h2>
            </div>
            <a
              href="/catalogo-cursos.pdf"
              download="catalogo-cursos.pdf"
              onClick={() => trackDownloadCatalog()}
              className={`${btnPrimary} whitespace-nowrap`}
              title={t('page.downloadCatalogTitle')}
              aria-label={t('page.downloadCatalogAria')}
            >
              <i className="fas fa-download"></i>
              <span>{t('page.downloadCatalog')}</span>
            </a>
          </div>

          {/* Chips de filtro por categoría */}
          <div className="mt-6 flex flex-wrap gap-2.5" role="group" aria-label={t('page.title')}>
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                activeCategory === null
                  ? 'border-accent bg-accent text-[#0b0c10] shadow-soft'
                  : 'border-border bg-surface text-text-subtle hover:border-accent hover:text-text'
              }`}
            >
              {t('page.allCategories')}
            </button>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  activeCategory === category
                    ? 'border-accent bg-accent text-[#0b0c10] shadow-soft'
                    : 'border-border bg-surface text-text-subtle hover:border-accent hover:text-text'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        {visibleCategories.map(category => {
          const items = courses.filter(c => c.category === category)
          if (!items.length) return null
          return (
            <section key={category} className="mx-auto mb-3 max-w-[1200px] px-3">
              <h3 className="mb-3">{category}</h3>
              <div className={cardGrid} aria-live="polite">
                {items.map((course, idx) => (
                  <div
                    key={course.id}
                    onClick={() => handleCardClick(course.id)}
                    className="cursor-pointer"
                  >
                    <CourseCard
                      course={course}
                      programNumber={idx + 1}
                      onOpen={() => handleCardClick(course.id)}
                    />
                  </div>
                ))}
              </div>
            </section>
          )
        })}
      </section>
    </main>
  )
}
