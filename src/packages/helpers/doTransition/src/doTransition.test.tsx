import { describe, it, expect, vi, beforeEach, afterEach, Mock } from 'vitest'
import { doTransition } from './doTransition'

describe('doTransition function', () => {
  let mockCallback: Mock<any, any>, mockEndCallback: Mock<any, any>

  beforeEach(() => {
    // Setup mock functions before each test
    mockCallback = vi.fn()
    mockEndCallback = vi.fn()
  })

  afterEach(() => {
    // Cleanup after each test
    vi.useRealTimers()
  })

  it('should transition values correctly', async () => {
    vi.useFakeTimers()

    doTransition({
      values: [0],
      targets: [100],
      callback: mockCallback,
      increments: 10,
      interval: 10,
    })

    vi.advanceTimersByTime(100)

    expect(mockCallback).toHaveBeenCalledTimes(11)
  })

  it('should throw error when values and targets length mismatch', () => {
    expect(() => {
      doTransition({
        values: [0],
        targets: [100, 200],
        callback: mockCallback,
      })
    }).toThrow('Transition values length does not match targets length.')
  })

  it('should call endCallback after completion', async () => {
    vi.useFakeTimers()

    doTransition({
      values: [0],
      targets: [100],
      callback: mockCallback,
      endCallback: mockEndCallback,
      increments: 10,
      interval: 10,
    })

    vi.advanceTimersByTime(5000)

    expect(mockEndCallback).toHaveBeenCalled()
  })

  it('should clear the transition on calling clear function', async () => {
    vi.useFakeTimers()

    const clear = doTransition({
      values: [0],
      targets: [100],
      callback: mockCallback,
      increments: 10,
      interval: 10,
    })

    clear()

    vi.advanceTimersByTime(100)

    expect(mockCallback).not.toHaveBeenCalledWith([100])
  })
})
