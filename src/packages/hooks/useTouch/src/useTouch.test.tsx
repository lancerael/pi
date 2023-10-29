import { act, renderHook, fireEvent } from '@testing-library/react'
import { expect } from 'vitest'
import { PanLevel, TouchControls, useTouch } from './'

if (typeof PointerEvent === 'undefined') {
  global.window.PointerEvent = class extends global.window.Event {
    constructor(type: string, opts: any = {}) {
      super(type, opts)
      const { bubbles, ...assignOpts } = opts
      Object.assign(this, assignOpts)
    }
  } as any
}

const firePointerEvent = (
  target: Node | Window,
  type: 'pointerdown' | 'pointermove' | 'pointerup',
  pointerId: number,
  pageX?: number,
  pageY?: number
) => {
  fireEvent(
    target,
    new PointerEvent(type, {
      pointerId,
      pageX,
      pageY,
      bubbles: true,
    } as PointerEvent)
  )
}

describe('useTouch Hook', () => {
  let target: HTMLDivElement
  let targetRef: React.RefObject<HTMLDivElement>
  let panLevel: PanLevel
  let zoomLevel: number
  let controls: TouchControls

  beforeEach(() => {
    panLevel = {
      x: 0,
      y: 0,
    }
    zoomLevel = 1
    controls = {
      setZoomLevel: (setter: any) => {
        zoomLevel = setter(zoomLevel)
      },
      setPanLevel: (setter: any) => {
        panLevel = setter(panLevel)
      },
      zoomLevel,
      panLevel,
    }
    target = document.createElement('div')
    document.body.appendChild(target)
    targetRef = { current: target }
    renderHook(() => useTouch({ targetRef, controls }))
  })

  afterEach(() => {
    document.body.removeChild(target)
  })

  test('should handle drag correctly', async () => {
    await act(() => {
      firePointerEvent(target, 'pointerdown', 0, 10, 10)
      firePointerEvent(global.window, 'pointermove', 0, 100, 100)
      firePointerEvent(target, 'pointerup', 0)
    })
    expect(zoomLevel).toBe(1)
    expect(panLevel).toEqual({ x: 90, y: 90 })
  })

  test('should handle pinch correctly', async () => {
    await act(() => {
      firePointerEvent(target, 'pointerdown', 0, 10, 10)
      firePointerEvent(target, 'pointerdown', 1, 20, 20)
      firePointerEvent(global.window, 'pointermove', 0, 30, 30)
      firePointerEvent(global.window, 'pointermove', 1, 40, 40)
      firePointerEvent(global.window, 'pointermove', 1, 80, 80)
      firePointerEvent(target, 'pointerup', 0)
      firePointerEvent(target, 'pointerup', 1)
    })
    expect(zoomLevel).toBe(2)
    expect(panLevel).toEqual({ x: 0, y: 0 })
  })
})
