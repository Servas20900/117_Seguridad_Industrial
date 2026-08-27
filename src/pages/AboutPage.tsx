import { useState } from 'react'
import SafeImage from '../components/SafeImage'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import { materialDidacticoItems } from '../data/materialDidactico'
import galleryItems from '../data/galleryItems'
import useLocalizedPath from '../hooks/useLocalizedPath'
import useDocumentTitle from '../hooks/useDocumentTitle'
import {
  eyebrow, lede, panel, panelHead, panelHeadTitle,
  heroSection, heroHome, heroBannerFrame, heroContentHome, heroCopyHome, heroTitle, heroLede,
  aboutGrid, cardGrid, glassCard, btnPrimary
} from '../styles/classNames'

export default function AboutPage() {
  const { t } = useTranslation('about')
  useDocumentTitle(t('aboutSection.title'))
  const { path } = useLocalizedPath()
  const [lightboxSlides, setLightboxSlides] = useState<{ src: string; alt: string }[] | null>(null)
  const heroLogo = 'https://res.cloudinary.com/deqpuhfzt/image/upload/v1773450867/Logoletrasblancas_ciawmi_qnnxr0.png'
  const previewGalleryItems = galleryItems.slice(0, 3)

  return (
    <main>
      <section id="who-we-are" className={`${heroSection} ${heroHome}`}>
        <div className={heroBannerFrame} role="img" aria-label="Logo 117 Seguridad Industrial en formato hero">
          <SafeImage
            src={heroLogo}
            alt="117 Seguridad Industrial"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div className={heroContentHome}>
          <div className={heroCopyHome}>
            <p className={eyebrow}>{t('hero.eyebrow')}</p>
            <h1 className={heroTitle}>{t('hero.title')}</h1>
            <p className={`${lede} ${heroLede} mt-3 mb-4.5`}>{t('hero.lede1')}</p>
            <p className={`${lede} ${heroLede} mt-3 mb-4.5`}>{t('hero.lede2')}</p>
            <p className={`${lede} ${heroLede} mt-3 mb-4.5`}><strong>{t('hero.lede3')}</strong></p>
          </div>
        </div>
      </section>

      <section id="about" className={panel}>
        <div className={panelHead}>
          <p className={eyebrow}>{t('aboutSection.eyebrow')}</p>
          <h2 className={panelHeadTitle}>{t('aboutSection.title')}</h2>
          <p className={lede}>{t('aboutSection.lede')}</p>
        </div>
        <div className={aboutGrid}>
          <article className={`${glassCard} grid-cols-[120px_1fr] items-center`} style={{ display: 'grid' }}>
            <SafeImage
              src="https://res.cloudinary.com/deqpuhfzt/image/upload/v1773451049/WhatsApp_Image_2026-03-13_at_7.15.24_PM_1_stfupb.jpg"
              alt={t('cards.pyme.title')}
              style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'var(--radius-md)', background: 'var(--surface-strong)', padding: '10px' }}
            />
            <div className="grid gap-1.5">
              <h3 className="m-0">{t('cards.pyme.title')}</h3>
              <p>{t('cards.pyme.text')}</p>
            </div>
          </article>

          <article className={`${glassCard} grid-cols-[120px_1fr] items-center`} style={{ display: 'grid' }}>
            <SafeImage
              src="https://res.cloudinary.com/deqpuhfzt/image/upload/v1773450655/LogoAbout_qyqs2b.jpg"
              alt={t('cards.methodology.title')}
              style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'var(--radius-md)', background: 'var(--surface-strong)', padding: '10px' }}
            />
            <div className="grid gap-1.5">
              <h3 className="m-0">{t('cards.methodology.title')}</h3>
              <p>{t('cards.methodology.text')}</p>
            </div>
          </article>

          <article className={`${glassCard} grid-cols-[120px_1fr] items-center`} style={{ display: 'grid' }}>
            <SafeImage
              src="https://res.cloudinary.com/deqpuhfzt/image/upload/v1773451060/WhatsApp_Image_2026-03-13_at_7.15.24_PM_s8b5wc.jpg"
              alt={t('cards.accreditation.title')}
              style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'var(--radius-md)', background: 'var(--surface-strong)', padding: '10px' }}
            />
            <div className="grid gap-1.5">
              <h3 className="m-0">{t('cards.accreditation.title')}</h3>
              <p>{t('cards.accreditation.text')}</p>
            </div>
          </article>
        </div>
      </section>

      <section id="material" className={panel}>
        <div className={panelHead}>
          <p className={eyebrow}>{t('materialSection.eyebrow')}</p>
          <h2 className={panelHeadTitle}>{t('materialSection.title')}</h2>
          <p className={lede}>{t('materialSection.lede')}</p>
        </div>

        <div className={aboutGrid}>
          {materialDidacticoItems.map((gallery) => {
            const title = t(`materialItems.${gallery.id}.title`, { defaultValue: gallery.title })
            const description = t(`materialItems.${gallery.id}.description`, { defaultValue: gallery.description })
            return (
              <article key={gallery.id} className={`${glassCard} text-center`}>
                <button
                  type="button"
                  onClick={() => setLightboxSlides(gallery.images.map((src) => ({ src, alt: title })))}
                  className="gallery-image-button w-full"
                  aria-label={title}
                >
                  <SafeImage
                    src={gallery.images[0]}
                    alt={title}
                    style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
                  />
                </button>
                <h3 className="mt-3.5 mb-1.5">{title}</h3>
                <p className="text-text-subtle">{description}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section id="gallery-preview" className={panel}>
        <div className={panelHead}>
          <p className={eyebrow}>{t('galleryPreview.eyebrow')}</p>
          <h2 className={panelHeadTitle}>{t('galleryPreview.title')}</h2>
          <p className={lede}>{t('galleryPreview.lede')}</p>
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
      </section>

      <Lightbox
        open={lightboxSlides !== null}
        close={() => setLightboxSlides(null)}
        slides={lightboxSlides ?? []}
        plugins={[Zoom, Thumbnails]}
      />
    </main>
  )
}
