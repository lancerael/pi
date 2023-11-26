import { renderHook } from '@testing-library/react'
import { useTimer } from './useTimer'
import { vi, describe, test, expect, beforeEach, afterEach } from 'vitest'

describe('useTimer hook', () => {
  // Set up to use fake timers
  beforeEach(() => {
    vi.useFakeTimers()
  })

  // Clean up after each test
  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('initializes the hook with default wait time', () => {
    const callback = vi.fn()
    renderHook(() => useTimer(callback))

    vi.advanceTimersByTime(1000) // Default wait time
    expect(callback).toHaveBeenCalled()
  })

  describe('Timeout functionality', () => {
    test('executes callback after specified timeout', () => {
      const callback = vi.fn()
      renderHook(() => useTimer(callback, { waitTime: 2000 }))

      vi.advanceTimersByTime(2000)
      expect(callback).toHaveBeenCalled()
    })
  })

  describe('Interval functionality', () => {
    test('executes callback at each interval', () => {
      const callback = vi.fn()
      renderHook(() => useTimer(callback, { type: 'Interval', waitTime: 1000 }))

      vi.advanceTimersByTime(3000) // Should trigger 3 times
      expect(callback).toHaveBeenCalledTimes(3)
    })
  })

  test('updates the timer when wait time changes', () => {
    const callback = vi.fn()
    const { rerender } = renderHook(
      ({ waitTime }) => useTimer(callback, { type: 'Timeout', waitTime }),
      { initialProps: { waitTime: 1000 } }
    )

    vi.advanceTimersByTime(500)
    rerender({ waitTime: 2000 }) // Change wait time
    vi.advanceTimersByTime(1500) // Not enough time for the callback to be called
    expect(callback).not.toHaveBeenCalled()

    vi.advanceTimersByTime(500) // Now the callback should be called
    expect(callback).toHaveBeenCalled()
  })

  test('clears the timer on unmount', () => {
    const callback = vi.fn()
    const { unmount } = renderHook(() => useTimer(callback))

    unmount()
    vi.advanceTimersByTime(1000)
    expect(callback).not.toHaveBeenCalled()
  })
})
