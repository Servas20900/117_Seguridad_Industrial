import { describe, it, expect, beforeEach } from 'vitest'
import { getAPIUrl, getCloudinaryConfig } from '../../src/config/api'

describe('API Configuration', () => {
  beforeEach(() => {
    // Reset import.meta.env
    import.meta.env.PROD = false
  })

  describe('getAPIUrl', () => {
    it('should return empty string in production', () => {
      import.meta.env.PROD = true
      const url = getAPIUrl()
      expect(url).toBe('')
    })

    it('should return localhost URL in development', () => {
      import.meta.env.PROD = false
      import.meta.env.VITE_API_PORT = '3001'
      const url = getAPIUrl()
      expect(url).toContain('localhost')
      expect(url).toContain('3001')
    })

    it('should default to port 3001 if VITE_API_PORT is not set', () => {
      import.meta.env.PROD = false
      const url = getAPIUrl()
      expect(url).toContain('3001')
    })
  })

  describe('getCloudinaryConfig', () => {
    it('should return cloudinary config with demo by default', () => {
      import.meta.env.VITE_CLOUDINARY_CLOUD_NAME = ''
      const config = getCloudinaryConfig()
      expect(config.cloudName).toBe('demo')
    })

    it('should return custom cloud name if set', () => {
      import.meta.env.VITE_CLOUDINARY_CLOUD_NAME = 'my-cloud'
      const config = getCloudinaryConfig()
      expect(config.cloudName).toBe('my-cloud')
    })
  })
})
