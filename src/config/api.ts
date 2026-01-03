/**
 * Configuración centralizada de API
 * Usa variables de entorno de Vite para determinar la URL base
 */

export const getAPIUrl = (): string => {
  // En producción, usa relative URL (mismo host)
  if (import.meta.env.PROD) {
    return ''
  }
  
  // En desarrollo, conecta al servidor local
  // Soporta diferentes puertos según entorno
  const port = import.meta.env.VITE_API_PORT || '3001'
  return `http://localhost:${port}`
}

/**
 * Realiza un fetch con error handling centralizado
 */
export const apiFetch = async <T = any>(
  endpoint: string,
  options?: RequestInit
): Promise<T> => {
  const url = `${getAPIUrl()}${endpoint}`
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`API request failed: ${url}`, error)
    throw error
  }
}

/**
 * Configuración de Cloudinary
 */
export const getCloudinaryConfig = () => {
  return {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'demo',
  }
}

/**
 * Configuración de Web3Forms
 */
export const getWeb3FormsKey = (): string => {
  return import.meta.env.VITE_WEB3FORMS || ''
}

/**
 * Configuración de Google Analytics
 */
export const getGAMeasurementId = (): string => {
  return import.meta.env.VITE_GA_MEASUREMENT_ID || ''
}
