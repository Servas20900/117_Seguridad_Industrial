import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../stores/authStore'
import ImageUploader from '../components/ImageUploader'

interface Course {
  id: string
  courseId: string
  title: string
  category: string
  image: string
}

interface Health {
  id: string
  serviceId: string
  title: string
  category: string
  image: string
}

interface Equipment {
  id: string
  kitId: string
  title: string
  category: string
  images: string[]
}

interface AboutGallery {
  id: string
  title: string
  category: string
  images: string[]
}

export default function AdminPage() {
  const navigate = useNavigate()
  const logout = useAuth((state) => state.logout)
  const editModalRef = useRef<HTMLDivElement>(null)

  const [courses, setCourses] = useState<Course[]>([])
  const [health, setHealth] = useState<Health[]>([])
  const [equipment, setEquipment] = useState<Equipment[]>([])
  const [about, setAbout] = useState<AboutGallery[]>([])
  const [activeTab, setActiveTab] = useState<'courses' | 'health' | 'equipment' | 'about'>('courses')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editingImage, setEditingImage] = useState<string | string[]>('')
  const [loading, setLoading] = useState(true)

  const handleLogout = () => {
    logout()
    navigate('/admin-login')
  }

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    setLoading(true)
    try {
      const API_URL = import.meta.env.PROD ? '' : 'http://localhost:3001'
      const [coursesRes, healthRes, equipmentRes, aboutRes] = await Promise.all([
        fetch(`${API_URL}/api/courses`),
        fetch(`${API_URL}/api/health`),
        fetch(`${API_URL}/api/equipment`),
        fetch(`${API_URL}/api/about`)
      ])

      const coursesData = await coursesRes.json()
      const healthData = await healthRes.json()
      const equipmentData = await equipmentRes.json()
      const aboutData = await aboutRes.json()

      setCourses(coursesData)
      setHealth(healthData)
      setEquipment(equipmentData)
      setAbout(aboutData)
    } catch (error) {
      console.error('Error loading data:', error)
      alert('Error cargando datos del servidor')
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (id: string, currentImage: string | string[]) => {
    setEditingId(id)
    setEditingImage(currentImage)
    // Scroll automático al modal de edición
    setTimeout(() => {
      editModalRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const handleSave = async () => {
    if (!editingId) return

    try {
      let endpoint = ''
      let body: any = {}

      if (activeTab === 'courses') {
        const course = courses.find(c => c.id === editingId)
        if (!course) return
        if (!editingImage) return
        endpoint = `/api/courses/${course.courseId}`
        body = { ...course, image: editingImage }
      } else if (activeTab === 'health') {
        const service = health.find(s => s.id === editingId)
        if (!service) return
        if (!editingImage) return
        endpoint = `/api/health/${service.serviceId}`
        body = { ...service, image: editingImage }
      } else if (activeTab === 'equipment') {
        const item = equipment.find(e => e.id === editingId)
        if (!item) return
        // Para equipamiento, editingImage es un array
        const imagesToSave = Array.isArray(editingImage) 
          ? editingImage.filter(img => img.trim() !== '')
          : []
        if (imagesToSave.length === 0) {
          alert(' Debes agregar al menos una imagen')
          return
        }
        endpoint = `/api/equipment/${item.kitId}`
        body = { ...item, images: imagesToSave }
      } else if (activeTab === 'about') {
        const gallery = about.find(a => a.id === editingId)
        if (!gallery) return
        const imagesToSave = Array.isArray(editingImage) 
          ? editingImage.filter(img => img.trim() !== '')
          : []
        endpoint = `/api/about/${gallery.title}`
        body = { title: gallery.title, category: gallery.category, images: imagesToSave }
      }

      const API_URL = import.meta.env.PROD ? '' : 'http://localhost:3001'
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })

      if (response.ok) {
        alert('Actualizado correctamente')
        setEditingId(null)
        setEditingImage('')
        loadData()
      } else {
        alert('Error al guardar')
      }
    } catch (error) {
      console.error('Error saving:', error)
      alert('Error al guardar')
    }
  }

  const getData = () => {
    switch (activeTab) {
      case 'courses':
        return courses
      case 'health':
        return health
      case 'equipment':
        return equipment
      case 'about':
        return about
    }
  }

  const data = getData()

  return (
    <main>
      <section className="panel">
        <div className="panel-head" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <p className="eyebrow">Administración</p>
            <h2>Gestiona las imágenes de tus tarjetas</h2>
            <p className="lede">Actualiza las imágenes de cursos, salud ocupacional, equipamiento y material didáctico desde aquí.</p>
          </div>
          <button
            onClick={handleLogout}
            style={{
              padding: '8px 16px',
              background: '#dc2626',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            Cerrar sesión
          </button>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '32px',
          flexWrap: 'wrap',
          borderBottom: '1px solid var(--border)',
          paddingBottom: '16px'
        }}>
          {(['courses', 'health', 'equipment', 'about'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="pill"
              style={{
                backgroundColor: activeTab === tab ? 'var(--accent)' : 'var(--surface)',
                color: activeTab === tab ? '#0b0c10' : 'var(--text)',
                borderColor: activeTab === tab ? 'var(--accent)' : 'var(--border)',
                fontWeight: activeTab === tab ? '700' : '600',
                cursor: 'pointer',
                border: `1px solid ${activeTab === tab ? 'var(--accent)' : 'var(--border)'}`
              }}
            >
              {tab === 'courses' && `Cursos (${courses.length})`}
              {tab === 'health' && `Salud (${health.length})`}
              {tab === 'equipment' && `Equipamiento (${equipment.length})`}
              {tab === 'about' && `About (${about.length})`}
            </button>
          ))}
        </div>

        {/* Edit Modal */}
        {editingId && (
          <div ref={editModalRef} style={{
            backgroundColor: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            padding: '28px',
            marginBottom: '32px',
            boxShadow: 'var(--card-glow)'
          }}>
            <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>
              Editar Imagen{(activeTab === 'equipment' || activeTab === 'about') ? 's' : ''}
            </h3>

            {(activeTab === 'equipment' || activeTab === 'about') ? (
              // Para equipamiento - múltiples imágenes
              <>
                <p style={{ marginBottom: '20px', color: 'var(--text-subtle)' }}>
                  Gestiona todas las imágenes del carrusel:
                </p>
                {Array.isArray(editingImage) ? (
                  <div style={{ display: 'grid', gap: '20px' }}>
                    {(editingImage as string[]).map((img, idx) => (
                      <div key={idx} style={{
                        padding: '16px',
                        backgroundColor: 'var(--surface-strong)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border)'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                          <p style={{ margin: 0, fontWeight: '600', color: 'var(--text)' }}>
                            Imagen {idx + 1}
                          </p>
                          {(editingImage as string[]).length > 1 && (
                            <button
                              onClick={() => {
                                const newImages = (editingImage as string[]).filter((_, i) => i !== idx)
                                setEditingImage(newImages)
                              }}
                              style={{
                                padding: '6px 12px',
                                backgroundColor: '#dc2626',
                                color: 'white',
                                border: 'none',
                                borderRadius: 'var(--radius-sm)',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                fontWeight: '600'
                              }}
                            >
                              Eliminar
                            </button>
                          )}
                        </div>
                        <ImageUploader
                          currentImage={img}
                          onImageUploaded={(url) => {
                            const newImages = [...(editingImage as string[])]
                            newImages[idx] = url
                            setEditingImage(newImages)
                          }}
                          folder={`117/${activeTab === 'equipment' ? 'Botiquines' : 'Material didactico'}`}
                          buttonText={img ? 'Cambiar Imagen' : 'Subir Imagen'}
                          showPreview={true}
                        />
                      </div>
                    ))}
                  </div>
                ) : null}
                <button
                  onClick={() => {
                    const arr = Array.isArray(editingImage) ? editingImage : [editingImage].filter(Boolean)
                    setEditingImage([...arr, ''])
                  }}
                  style={{
                    padding: '10px 16px',
                    backgroundColor: 'var(--accent)',
                    color: '#0b0c10',
                    border: 'none',
                    borderRadius: 'var(--radius-md)',
                    cursor: 'pointer',
                    fontWeight: '600',
                    marginTop: '16px',
                    marginBottom: '20px'
                  }}
                >
                  Agregar otra imagen
                </button>
              </>
            ) : (
              // Para cursos y salud - una sola imagen
              <>
                <ImageUploader
                  currentImage={typeof editingImage === 'string' ? editingImage : ''}
                  onImageUploaded={(url) => setEditingImage(url)}
                  folder={`117/${activeTab === 'courses' ? 'courses' : 'SaludOcupacional'}`}
                  buttonText={editingImage ? 'Cambiar Imagen' : 'Subir Imagen'}
                  showPreview={true}
                />
              </>
            )}

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={handleSave}
                className="btn primary"
              >
                Guardar
              </button>
              <button
                onClick={() => {
                  setEditingId(null)
                  setEditingImage('')
                }}
                className="btn ghost"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}

        {/* Grid de Cards */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <p style={{ color: 'var(--text-subtle)' }}>Cargando datos...</p>
          </div>
        ) : data.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            backgroundColor: 'var(--surface)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border)'
          }}>
            <p style={{ color: 'var(--text-subtle)' }}>No hay datos disponibles</p>
          </div>
        ) : (
          <div className="card-grid">
            {data.map((item: any) => (
              <div
                key={item.id}
                className="card"
                style={{ cursor: 'default' }}
              >
                {/* Imagen */}
                <div style={{
                  width: '100%',
                  height: '180px',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--surface-strong)',
                  marginBottom: '12px'
                }}>
                  {(item.image || item.images?.[0]) ? (
                    <img
                      src={item.image || item.images[0]}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-subtle)',
                      fontSize: '2rem'
                    }}>
                      
                    </div>
                  )}
                </div>

                {/* Badge de categoría */}
                <div className="badge" style={{ width: 'fit-content' }}>
                  {item.category}
                </div>

                {/* Título */}
                <h4 style={{
                  margin: '8px 0',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  lineHeight: '1.3'
                }}>
                  {item.title}
                </h4>

                {/* ID */}
                <p className="meta" style={{ fontSize: '0.85rem', marginBottom: '12px' }}>
                  {activeTab === 'about' ? `Galería: ${item.title}` : `ID: ${item.courseId || item.serviceId || item.kitId}`}
                </p>

                {/* Botón Editar */}
                <button
                  onClick={() => handleEdit(item.id, (activeTab === 'equipment' || activeTab === 'about') ? item.images : (item.image || ''))}
                  className="btn primary"
                  style={{ width: '100%', marginTop: '8px' }}
                >
                  Editar {(activeTab === 'equipment' || activeTab === 'about') ? 'Imágenes' : 'Imagen'}
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
