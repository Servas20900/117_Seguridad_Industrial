import SafeImage from '../components/SafeImage'

const logoNegroAmarillo = 'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766903804/logo-negro-amarillo_uvlvgd.jpg'
const logoNegroBlanco = 'https://res.cloudinary.com/dcwxslhjf/image/upload/v1766903786/logo-negro-blanco_wxiszp.jpg'

export default function LogosPage() {
  return (
    <main>
      <section id="logos" className="panel">
        <div className="panel-head">
          <p className="eyebrow">Logos</p>
          <h2>Logotipos oficiales desde Cloudinary.</h2>
          <p className="lede">Visualización directa desde Cloudinary con fallback en caso de error de carga.</p>
        </div>
        <div className="logo-wall">
          <div className="logo-slot" style={{ padding: '10px' }}>
            <SafeImage src={logoNegroAmarillo} alt="Logo negro y amarillo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div className="logo-slot" style={{ padding: '10px' }}>
            <SafeImage src={logoNegroBlanco} alt="Logo negro y blanco" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div className="logo-slot">Certificaciones</div>
          <div className="logo-slot">Clientes</div>
          <div className="logo-slot">Aliados</div>
        </div>
      </section>
    </main>
  )
}
