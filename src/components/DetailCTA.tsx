import { Link } from 'react-router-dom'
import useLocalizedPath from '../hooks/useLocalizedPath'
import { detailCta, detailCtaTitle, detailCtaText, detailCtaButton, btnPrimary } from '../styles/classNames'

interface DetailCTAProps {
  title: string
  description: string
  buttonText: string
  buttonHref?: string
}

export default function DetailCTA({
  title,
  description,
  buttonText,
  buttonHref = '/contact'
}: DetailCTAProps) {
  const { path } = useLocalizedPath()

  return (
    <div className={detailCta}>
      <div>
        <h2 className={detailCtaTitle}>{title}</h2>
        <p className={detailCtaText}>{description}</p>
      </div>
      <Link to={path(buttonHref)} className={`${btnPrimary} ${detailCtaButton}`}>
        {buttonText}
      </Link>
    </div>
  )
}
