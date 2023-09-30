import { useControls } from './'
import { act, renderHook } from '@testing-library/react'
import { expect } from 'vitest'
import { TouchControls } from './useTouch.types'

describe('useControls Hook', () => {
  let hook: {
    current: TouchControls
  }

  beforeEach(() => {
    const { result } = renderHook(() => useControls())
    hook = result
  })

  test('should initialize zoomLevel and panLevel correctly', () => {
    expect(hook.current.zoomLevel).toBe(1)
    expect(hook.current.panLevel).toEqual({ x: 0, y: 0 })
  })

  test('should update zoomLevel correctly', () => {
    act(() => {
      hook.current.setZoomLevel(2)
    })
    expect(hook.current.zoomLevel).toBe(2)
  })

  test('should update panLevel correctly', () => {
    act(() => {
      hook.current.setPanLevel({ x: 50, y: 50 })
    })
    expect(hook.current.panLevel).toEqual({ x: 50, y: 50 })
  })
})
