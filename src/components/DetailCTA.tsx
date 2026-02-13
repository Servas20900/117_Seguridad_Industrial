interface DetailCTAProps {
  title: string
  description: string
  buttonText?: string
  buttonHref?: string
}

export default function DetailCTA({
  title,
  description,
  buttonText = 'Solicitar Información',
  buttonHref = '/contact'
}: DetailCTAProps) {
  return (
    <div className="detail-cta">
      <div className="detail-cta-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <a href={buttonHref} className="btn primary">
        {buttonText}
      </a>
    </div>
  )
}
