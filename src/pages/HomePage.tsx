import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SafeImage from '../components/SafeImage'
import CourseCard from '../components/CourseCard'
import ItemCard from '../components/ItemCard'
import Reveal from '../components/Reveal'
import useDocumentTitle from '../hooks/useDocumentTitle'
import galleryItems from '../data/galleryItems'
import { trackDownloadCatalog } from '../utils/analytics'
import useLocalizedPath from '../hooks/useLocalizedPath'
import useLocalizedCourses from '../hooks/useLocalizedCourses'
import useLocalizedHealthServices from '../hooks/useLocalizedHealthServices'
import useLocalizedEquipment from '../hooks/useLocalizedEquipment'
import {
  eyebrow, lede, panel, panelHead,
  heroSection, heroHome, heroBannerFrame, heroContentHome, heroCopyHome, heroTitle, heroLede, ctaRow,
  homeSection, homeSectionHead, homeSectionHeadTitle, homeViewAll,
  cardGrid, glassCard, btnPrimary
} from '../styles/classNames'

export default function HomePage() {
  const { t } = useTranslation('home')
  useDocumentTitle()
  const navigate = useNavigate()
  const { path } = useLocalizedPath()
  const heroLogo = 'https://res.cloudinary.com/deqpuhfzt/image/upload/v1774836271/Logo4_opdowt.jpg'
  const companyProfilePdf = '/perfil-empresa.pdf'

  const courses = useLocalizedCourses()
  const equipmentItems = useLocalizedEquipment()
  const healthServices = useLocalizedHealthServices()

  // Get 3 first items from each category
  const featuredCourses = courses.slice(0, 3)
  const featuredEquipment = equipmentItems.slice(0, 3)
  const featuredHealth = healthServices.slice(0, 3)

  const previewGalleryItems = galleryItems.slice(0, 3)

  return (
    <main>
      {/* Hero Section */}
      <section id="home" className={`${heroSection} ${heroHome}`}>
        <div className={heroBannerFrame} role="img" aria-label="Logo 117 Seguridad Industrial en formato hero">
          <SafeImage
            src={heroLogo}
            alt="117 Seguridad Industrial"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div className={heroContentHome}>
          <div className={heroCopyHome}>
            <p className={eyebrow}> {t('hero.eyebrow')}</p>
            <h1 className={heroTitle}>{t('hero.title')}</h1>
            <p className={`${lede} ${heroLede} mt-3 mb-4.5`}>{t('hero.lede')}</p>
            <div className={ctaRow}>
              <a
                href={companyProfilePdf}
                download="perfil-empresa.pdf"
                onClick={() => trackDownloadCatalog()}
                className={btnPrimary}
                title={t('hero.downloadProfile')}
                aria-label={t('hero.downloadProfile')}
              >
                <i className="fas fa-download" aria-hidden="true"></i>
                <span>{t('hero.downloadProfile')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={panel}>
        <Reveal className={homeSection}>
          <div className={homeSectionHead}>
            <div>
              <p className={eyebrow}>{t('coursesSection.eyebrow')}</p>
              <h2 className={homeSectionHeadTitle}>{t('coursesSection.title')}</h2>
              <p className={lede}>{t('coursesSection.lede')}</p>
            </div>
            <Link className={`${btnPrimary} ${homeViewAll}`} to={path('/courses')}>{t('buttons.viewAll', { ns: 'common' })}</Link>
          </div>
          <div className={cardGrid} aria-live="polite">
            {featuredCourses.map((course, idx) => (
              <div key={course.id} className="w-full cursor-pointer">
                <CourseCard
                  course={course}
                  programNumber={idx + 1}
                  onOpen={() => navigate(path(`/courses/${course.id}`))}
                />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className={panel}>
        <Reveal className={homeSection}>
          <div className={homeSectionHead}>
            <div>
              <p className={eyebrow}>{t('healthSection.eyebrow')}</p>
              <h2 className={homeSectionHeadTitle}>{t('healthSection.title')}</h2>
              <p className={lede}>{t('healthSection.lede')}</p>
            </div>
            <Link className={`${btnPrimary} ${homeViewAll}`} to={path('/health')}>{t('buttons.viewAll', { ns: 'common' })}</Link>
          </div>
          <div className={cardGrid} aria-live="polite">
            {featuredHealth.map((service, idx) => (
              <div key={service.id} className="w-full cursor-pointer">
                <ItemCard
                  title={service.title}
                  image={service.image}
                  meta={service.modality}
                  summary={service.scope}
                  pills={service.pills}
                  itemNumber={idx + 1}
                  onOpen={() => navigate(path(`/health/${service.id}`))}
                />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className={panel}>
        <Reveal className={homeSection}>
          <div className={homeSectionHead}>
            <div>
              <p className={eyebrow}>{t('equipmentSection.eyebrow')}</p>
              <h2 className={homeSectionHeadTitle}>{t('equipmentSection.title')}</h2>
              <p className={lede}>{t('equipmentSection.lede')}</p>
            </div>
            <Link className={`${btnPrimary} ${homeViewAll}`} to={path('/equipment')}>{t('buttons.viewAll', { ns: 'common' })}</Link>
          </div>
          <div className={cardGrid} aria-live="polite">
            {featuredEquipment.map((item, idx) => (
              <div key={item.id} className="w-full cursor-pointer">
                <ItemCard
                  title={item.title}
                  image={item.cardImage}
                  summary={item.description}
                  pills={item.pills}
                  itemNumber={idx + 1}
                  onOpen={() => navigate(path(`/equipment/${item.id}`))}
                />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="gallery-preview" className={panel}>
        <Reveal>
          <div className={panelHead}>
            <p className={eyebrow}>{t('gallerySection.eyebrow')}</p>
            <h2 className="mb-2.5 text-[clamp(1.6rem,3vw,2.2rem)] tracking-tight">{t('gallerySection.title')}</h2>
            <p className={lede}>{t('gallerySection.lede')}</p>
          </div>

          <div className="mx-auto max-w-[1200px] px-3">
            <div className={cardGrid} aria-live="polite">
              {previewGalleryItems.map((item) => (
                <article key={item.id} className={`${glassCard} w-full`}>
                  <SafeImage
                    src={item.image}
                    alt={item.description}
                    style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
                  />
                </article>
              ))}
            </div>

            <div className="mt-5 flex justify-center">
              <Link to={path('/gallery')} className={btnPrimary}>
                <span>{t('buttons.viewMore', { ns: 'common' })}</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

    </main>
  )
}
