import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

// Cleanup después de cada test
afterEach(() => {
  cleanup()
})

// Polyfills si es necesario
global.fetch = global.fetch || (() => Promise.resolve())
