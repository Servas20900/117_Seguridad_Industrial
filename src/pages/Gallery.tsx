import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import SafeImage from '../components/SafeImage'
import galleryItems from '../data/galleryItems'
import useLocalizedPath from '../hooks/useLocalizedPath'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { eyebrow, lede, panel, panelHead, panelHeadTitle, btnGhost, cardGrid, glassCard } from '../styles/classNames'

export default function GalleryPage() {
	const { t } = useTranslation('gallery')
	useDocumentTitle(t('eyebrow'))
	const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
	const navigate = useNavigate()
	const { path } = useLocalizedPath()

	const handleBack = () => {
		if (window.history.length > 1) {
			navigate(-1)
			return
		}

		navigate(path('/'))
	}

	const slides = galleryItems.map((item) => ({
		src: item.image,
		alt: item.description || t('fallbackAlt')
	}))

	return (
		<main>
			<section id="gallery" className={panel}>
				<div className={panelHead}>
					<button type="button" className={`${btnGhost} mb-3.5`} onClick={handleBack}>
						<i className="fas fa-arrow-left" aria-hidden="true"></i>
						<span>{t('back')}</span>
					</button>
					<p className={eyebrow}>{t('eyebrow')}</p>
					<h2 className={panelHeadTitle}>{t('title')}</h2>
					<p className={lede}>{t('lede')}</p>
				</div>

				<div className="mx-auto max-w-[1200px] px-3">
					<div className={cardGrid} aria-live="polite">
						{galleryItems.map((item, index) => (
							<article key={item.id} className={`${glassCard} w-full`}>
								<button
									type="button"
									onClick={() => setLightboxIndex(index)}
									className="gallery-image-button"
									aria-label={t('viewLarger')}
								>
									<SafeImage
										src={item.image}
										alt={item.description || t('fallbackAlt')}
										style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
									/>
								</button>
								<p className="mt-2.5">{item.description}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<Lightbox
				open={lightboxIndex !== null}
				close={() => setLightboxIndex(null)}
				index={lightboxIndex ?? 0}
				slides={slides}
				plugins={[Zoom, Thumbnails]}
			/>
		</main>
	)
}
