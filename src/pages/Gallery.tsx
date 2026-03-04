import SafeImage from '../components/SafeImage'
import galleryItems from '../data/galleryItems'

export default function GalleryPage() {
	return (
		<main>
			<section id="gallery" className="panel">
				<div className="panel-head">
					<p className="eyebrow">Galería</p>
					<h2>Evidencia visual de nuestros procesos de capacitación.</h2>
					<p className="lede">Cada carta muestra una imagen y una breve descripción de actividades reales realizadas con empresas.</p>
				</div>

				<div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 12px' }}>
					<div className="card-grid" aria-live="polite">
						{galleryItems.map((item) => (
							<article key={item.id} className="info-card" style={{ width: '100%' }}>
								<SafeImage
									src={item.image}
									alt={item.description}
									style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
								/>
								<p style={{ marginTop: '10px' }}>{item.description}</p>
							</article>
						))}
					</div>
				</div>
			</section>
		</main>
	)
}
