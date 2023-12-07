import { act, renderHook, fireEvent } from '@testing-library/react'
import { vi, expect } from 'vitest'
import { useLimitedEvents } from './useLimitedEvents'

describe('useLimitedEvents', () => {
  it('fires callback on window resize', () => {
    const callback = vi.fn()
    renderHook(() => useLimitedEvents(callback, { doInit: false }))
    act(() => {
      fireEvent(window, new Event('resize'))
    })
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('fires callback on initialization if doInit is true', () => {
    const callback = vi.fn()
    renderHook(() => useLimitedEvents(callback, { doInit: true }))
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('does not fire callback on initialization if doInit is false', () => {
    const callback = vi.fn()
    renderHook(() => useLimitedEvents(callback, { doInit: false }))
    expect(callback).not.toHaveBeenCalled()
  })

  it('re-binds event listeners when dependencies change', () => {
    const callback = vi.fn()
    const { rerender } = renderHook(
      ({ value }) => useLimitedEvents(callback, { doInit: false }, [value]),
      { initialProps: { value: 0 } }
    )
    act(() => {
      fireEvent(window, new Event('resize'))
    })
    expect(callback).toHaveBeenCalledTimes(1)
    rerender({ value: 1 })
    act(() => {
      fireEvent(window, new Event('resize'))
    })
    expect(callback).toHaveBeenCalledTimes(2)
  })

  it('binds custom events correctly', () => {
    const callback = vi.fn()
    renderHook(() =>
      useLimitedEvents(callback, { events: ['click'], doInit: false })
    )
    act(() => {
      fireEvent.click(window)
    })
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('throttles callback calls within the timeout', async () => {
    const callback = vi.fn()
    renderHook(() =>
      useLimitedEvents(callback, { timeout: 500, doInit: false })
    )
    await act(async () => {
      await fireEvent(window, new Event('resize'))
      await new Promise((resolve) => setTimeout(resolve, 50))
      await fireEvent(window, new Event('resize'))
    })
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('does not throttle callback calls outside the timeout', async () => {
    const callback = vi.fn(() => console.log('firing'))
    renderHook(() =>
      useLimitedEvents(callback, { timeout: 500, doInit: false })
    )
    await act(async () => {
      console.log('Firing first resize event')
      await fireEvent(window, new Event('resize'))
      await new Promise((resolve) => setTimeout(resolve, 550))
      console.log('Firing second resize event')
      await fireEvent(window, new Event('resize'))
    })
    expect(callback).toHaveBeenCalledTimes(2)
  })

  it('debounces callback calls within the timeout', async () => {
    const callback = vi.fn()
    renderHook(() =>
      useLimitedEvents(callback, {
        timeout: 500,
        doInit: false,
        type: 'debounce',
      })
    )
    await act(async () => {
      await fireEvent(window, new Event('resize'))
      await new Promise((resolve) => setTimeout(resolve, 50))
      await fireEvent(window, new Event('resize'))
      await new Promise((resolve) => setTimeout(resolve, 50))
      await fireEvent(window, new Event('resize'))
      await new Promise((resolve) => setTimeout(resolve, 50))
    })
    expect(callback).toHaveBeenCalledTimes(0)
  })

  it('does not debounce callback calls outside the timeout', async () => {
    const callback = vi.fn(() => console.log('firing'))
    renderHook(() =>
      useLimitedEvents(callback, {
        timeout: 500,
        doInit: false,
        type: 'debounce',
      })
    )
    await act(async () => {
      await fireEvent(window, new Event('resize'))
      await new Promise((resolve) => setTimeout(resolve, 550))
    })
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('applies event listener options', () => {
    const callback = vi.fn()
    renderHook(() =>
      useLimitedEvents(callback, { args: { passive: true }, doInit: false })
    )
    act(() => {
      fireEvent(window, new Event('resize'))
    })
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('removes event listeners on unmount', () => {
    const callback = vi.fn()
    const { unmount } = renderHook(() =>
      useLimitedEvents(callback, { doInit: false })
    )
    unmount()
    act(() => {
      fireEvent(window, new Event('resize'))
    })
    expect(callback).not.toHaveBeenCalled()
  })
})
