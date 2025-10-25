import { withTimeout, TimeoutError } from '../lib/utils/timeout'

describe('withTimeout', () => {
  // Test case 1: Promise resolves before timeout
  it('should resolve with the promise value if it completes before timeout', async () => {
    const promise = new Promise(resolve => setTimeout(() => resolve('Success'), 100))
    const result = await withTimeout(promise, 200, 'Fallback')
    expect(result).toBe('Success')
  })

  // Test case 2: Promise rejects before timeout
  it('should reject with the promise error if it rejects before timeout', async () => {
    const promise = new Promise((_, reject) => setTimeout(() => reject(new Error('Failure')), 100))
    await expect(withTimeout(promise, 200, 'Fallback')).rejects.toThrow('Failure')
  })

  // Test case 3: Promise times out
  it('should resolve with the fallback value if the promise times out', async () => {
    const promise = new Promise(resolve => setTimeout(() => resolve('Success'), 300))
    const result = await withTimeout(promise, 200, 'Fallback')
    expect(result).toBe('Fallback')
  })

  // Test case 4: AbortError occurs
  it('should resolve with the fallback value if an AbortError is caught', async () => {
    const promise = new Promise((_, reject) => {
      const error = new Error('Aborted')
      error.name = 'AbortError'
      setTimeout(() => reject(error), 100)
    })
    const result = await withTimeout(promise, 200, 'Fallback')
    expect(result).toBe('Fallback')
  })
})
