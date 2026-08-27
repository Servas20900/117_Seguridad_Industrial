import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ItemCard from '../components/ItemCard'
import useLocalizedPath from '../hooks/useLocalizedPath'
import useLocalizedHealthServices from '../hooks/useLocalizedHealthServices'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { eyebrow, lede, panel, panelHead, panelHeadTitle, cardGrid } from '../styles/classNames'

export default function HealthPage() {
  const { t } = useTranslation('healthServices')
  useDocumentTitle(t('page.title'))
  const navigate = useNavigate()
  const { path } = useLocalizedPath()
  const occupationalHealthServices = useLocalizedHealthServices()
  const categories = Array.from(new Set(occupationalHealthServices.map(s => s.category)))

  const handleCardClick = (serviceId: string) => {
    navigate(path(`/health/${serviceId}`))
  }

  return (
    <main>
      <section id="health" className={panel}>
        <div className={panelHead}>
          <p className={eyebrow}>{t('page.eyebrow')}</p>
          <h2 className={panelHeadTitle}>{t('page.title')}</h2>
          <p className={lede}>{t('page.lede')}</p>
        </div>
        {categories.map(category => {
          const items = occupationalHealthServices.filter(s => s.category === category)
          if (!items.length) return null
          return (
            <section key={category} className="mx-auto mb-3 max-w-[1200px] px-3">
              <h3 className="mb-3">{category}</h3>
              <div className={cardGrid} aria-live="polite">
                {items.map((service, idx) => (
                  <div
                    key={service.id}
                    onClick={() => handleCardClick(service.id)}
                    className="cursor-pointer"
                  >
                    <ItemCard
                      title={service.title}
                      image={service.image}
                      meta={service.modality}
                      summary={service.scope}
                      pills={service.pills}
                      itemNumber={idx + 1}
                      onOpen={() => handleCardClick(service.id)}
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
