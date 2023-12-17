import { useControls } from './'
import { act, renderHook } from '@testing-library/react'
import { expect } from 'vitest'
import { TouchControls } from './useControls.types'

describe('useControls Hook', () => {
  let hook: {
    current: TouchControls
  }

  beforeEach(() => {
    const { result } = renderHook(() => useControls())
    hook = result
  })

  test('should initialize zoomLevel and panLevel correctly', () => {
    expect(hook.current.touchState.zoom).toBe(1)
    expect(hook.current.touchState.pan).toEqual({ x: 0, y: 0 })
  })

  test('should update zoomLevel correctly', () => {
    act(() => {
      hook.current.setTouchState({ zoom: 2, pan: { x: 0, y: 0 } })
    })
    expect(hook.current.touchState.zoom).toBe(2)
  })

  test('should update panLevel correctly', () => {
    act(() => {
      hook.current.setTouchState({ zoom: 1, pan: { x: 50, y: 50 } })
    })
    expect(hook.current.touchState.pan).toEqual({ x: 50, y: 50 })
  })
})
