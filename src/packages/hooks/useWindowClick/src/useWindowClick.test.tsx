import { act, renderHook, fireEvent } from '@testing-library/react'
import { vi, expect } from 'vitest'
import { useWindowClick } from './useWindowClick'

describe('useWindowClick', () => {
  it('calls callback on click outside container', () => {
    const callback = vi.fn()
    const mockContainer = document.createElement('div')
    renderHook(() => useWindowClick(callback, { current: mockContainer }))

    act(() => {
      fireEvent.click(document)
    })

    expect(callback).toHaveBeenCalled()
  })

  it('does not call callback on click inside container', () => {
    const callback = vi.fn()
    const mockContainer = document.createElement('div')
    renderHook(() => useWindowClick(callback, { current: mockContainer }))

    act(() => {
      fireEvent.click(mockContainer)
    })

    expect(callback).not.toHaveBeenCalled()
  })

  it('calls callback on Escape key press', () => {
    const callback = vi.fn()
    renderHook(() => useWindowClick(callback))

    act(() => {
      fireEvent.keyDown(document, { key: 'Escape' })
    })

    expect(callback).toHaveBeenCalled()
  })

  it('does not call callback on non-Escape key press', () => {
    const callback = vi.fn()
    renderHook(() => useWindowClick(callback))

    act(() => {
      fireEvent.keyDown(document, { key: 'Enter' })
    })

    expect(callback).not.toHaveBeenCalled()
  })
})
