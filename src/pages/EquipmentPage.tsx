import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ItemCard from '../components/ItemCard'
import { trackDownloadCatalog } from '../utils/analytics'
import useLocalizedPath from '../hooks/useLocalizedPath'
import useLocalizedEquipment from '../hooks/useLocalizedEquipment'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { eyebrow, lede, panel, panelHead, panelHeadTitle, cardGrid, btnPrimary } from '../styles/classNames'

export default function EquipmentPage() {
  const { t } = useTranslation('equipment')
  useDocumentTitle(t('page.title'))
  const navigate = useNavigate()
  const { path } = useLocalizedPath()
  const firstAidKits = useLocalizedEquipment()
  const categories = Array.from(new Set(firstAidKits.map(k => k.category)))

  const handleCardClick = (equipmentId: string) => {
    navigate(path(`/equipment/${equipmentId}`))
  }

  return (
    <main>
      <section id="equipment" className={panel}>
        <div className={panelHead}>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className={eyebrow}>{t('page.eyebrow')}</p>
              <h2 className={panelHeadTitle}>{t('page.title')}</h2>
              <p className={lede}>{t('page.lede')}</p>
            </div>
            <a
              href="/publicidad-botiquin.pdf"
              download="publicidad-botiquin.pdf"
              onClick={() => trackDownloadCatalog()}
              className={`${btnPrimary} whitespace-nowrap`}
              title={t('page.downloadCatalogTitle')}
              aria-label={t('page.downloadCatalogAria')}
            >
              <i className="fas fa-download"></i>
              <span>{t('page.downloadCatalog')}</span>
            </a>
          </div>
        </div>
        {categories.map(category => {
          const items = firstAidKits.filter(k => k.category === category)
          if (!items.length) return null
          return (
            <section key={category} className="mx-auto mb-3 max-w-[1200px] px-3">
              <h3 className="mb-3">{category}</h3>
              <div className={cardGrid} aria-live="polite">
                {items.map((kit, idx) => (
                  <div
                    key={kit.id}
                    onClick={() => handleCardClick(kit.id)}
                    className="cursor-pointer"
                  >
                    <ItemCard
                      title={kit.title}
                      image={kit.cardImage}
                      summary={kit.description}
                      pills={kit.pills}
                      itemNumber={idx + 1}
                      onOpen={() => handleCardClick(kit.id)}
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
