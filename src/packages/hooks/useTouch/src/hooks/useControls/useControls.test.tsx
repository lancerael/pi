import { useControls } from './'
import { act, renderHook } from '@testing-library/react'
import { expect } from 'vitest'
import { TouchControls } from './useControls.types'

describe.skip('useControls Hook', () => {
  let hook: {
    current: TouchControls
  }

  beforeEach(() => {
    const { result } = renderHook(() => useControls())
    hook = result
  })

  test('should initialize zoomLevel and panLevel correctly', () => {
    expect(hook.current.touchStateSignal.value.zoom).toBe(1)
    expect(hook.current.touchStateSignal.value.pan).toEqual({ x: 0, y: 0 })
  })

  test('should update zoomLevel correctly', () => {
    act(() => {
      hook.current.setTouchState({ zoom: 2 })
    })
    expect(hook.current.touchStateSignal.value.zoom).toBe(2)
  })

  test('should update panLevel correctly', () => {
    act(() => {
      hook.current.setTouchState({ pan: { x: 50, y: 50 } })
    })
    expect(hook.current.touchStateSignal.value.pan).toEqual({ x: 50, y: 50 })
  })
})
