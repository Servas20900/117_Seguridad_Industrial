import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SafeImage from '../components/SafeImage'
import galleryItems from '../data/galleryItems'

export default function GalleryPage() {
	const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)
	const navigate = useNavigate()

	const handleBack = () => {
		if (window.history.length > 1) {
			navigate(-1)
			return
		}

		navigate('/')
	}

	useEffect(() => {
		if (!selectedImage) return

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setSelectedImage(null)
			}
		}

		window.addEventListener('keydown', onKeyDown)
		return () => window.removeEventListener('keydown', onKeyDown)
	}, [selectedImage])

	const closeModal = () => setSelectedImage(null)

	return (
		<main>
			<section id="gallery" className="panel">
				<div className="panel-head">
					<button type="button" className="btn ghost" onClick={handleBack} style={{ marginBottom: '14px' }}>
						<i className="fas fa-arrow-left" aria-hidden="true"></i>
						<span>Volver</span>
					</button>
					<p className="eyebrow">Galería</p>
					<h2>Evidencia visual de nuestros procesos de capacitación.</h2>
					<p className="lede">Cada carta muestra una imagen y una breve descripción de actividades reales realizadas con empresas.</p>
				</div>

				<div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 12px' }}>
					<div className="card-grid" aria-live="polite">
						{galleryItems.map((item) => (
							<article key={item.id} className="info-card" style={{ width: '100%' }}>
								<button
									type="button"
									onClick={() => setSelectedImage({ src: item.image, alt: item.description || 'Imagen de galeria' })}
									className="gallery-image-button"
									aria-label="Ver imagen en grande"
								>
									<SafeImage
										src={item.image}
										alt={item.description || 'Imagen de galeria'}
										style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
									/>
								</button>
								<p style={{ marginTop: '10px' }}>{item.description}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			{selectedImage && (
				<div
					className="gallery-zoom-overlay"
					onClick={closeModal}
					role="dialog"
					aria-modal="true"
					aria-label="Vista ampliada de imagen"
				>
					<div className="gallery-zoom-content" onClick={(event) => event.stopPropagation()}>
						<button type="button" className="icon-btn close" onClick={closeModal} aria-label="Cerrar imagen ampliada">✕</button>
						<SafeImage
							src={selectedImage.src}
							alt={selectedImage.alt}
							style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: 'var(--radius-md)' }}
						/>
					</div>
				</div>
			)}
		</main>
	)
}
