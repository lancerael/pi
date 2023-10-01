import { act, renderHook, fireEvent } from '@testing-library/react'
import { expect } from 'vitest'
import { useTouch } from './'

if (typeof PointerEvent === 'undefined') {
  global.window.PointerEvent = class extends global.window.Event {
    constructor(type: string, opts: any = {}) {
      super(type, opts)
      const { bubbles, ...assignOpts } = opts
      Object.assign(this, assignOpts)
    }
  } as any
}

// class MockPointerEvent {}

describe('useTouch Hook', () => {
  let target: HTMLDivElement
  let targetRef: React.RefObject<HTMLDivElement>

  beforeEach(() => {
    target = document.createElement('div')
    document.body.appendChild(target)
    targetRef = { current: target }
    // global.window.PointerEvent = MockPointerEvent as any
  })

  afterEach(() => {
    document.body.removeChild(target)
  })

  test('should handle drag correctly', async () => {
    let panLevel = {
      x: 0,
      y: 0,
    }

    const controls = {
      setZoomLevel: vi.fn(),
      setPanLevel: (setter: any) => {
        console.log('update', setter(panLevel))
        panLevel = setter(panLevel)
      },
      zoomLevel: 0,
      panLevel,
    }

    renderHook(() => useTouch({ targetRef, controls }))

    await act(async () => {
      fireEvent.pointerDown(target, {
        pointerId: 0,
        pageX: 10,
        pageY: 10,
      })
      // fireEvent.pointerMove(target, {
      //   isTrusted: true,
      //   clientX: 100,
      //   clientY: 100,
      // })
      fireEvent(
        target,
        new PointerEvent('pointermove', {
          bubbles: true,
          clientX: 50,
          clientY: 50,
        })
      )
      fireEvent(
        target,
        new PointerEvent('pointermove', {
          bubbles: true,
          clientX: 100,
          clientY: 100,
        })
      )
      fireEvent.pointerUp(target, {
        pointerId: 0,
      })
    })
    expect(controls.setZoomLevel).not.toHaveBeenCalled()
    expect(controls.panLevel).toEqual({ x: 90, y: 90 })
  })

  // test('should handle move event correctly', () => {
  //   const controls = {
  //     setZoomLevel: jest.fn(),
  //     setPanLevel: jest.fn(),
  //     // ... other control functions and states
  //   }

  //   const { result } = renderHook(() =>
  //     useTouch(targetRef, controls /*, other parameters here...*/)
  //   )

  //   act(() => {
  //     // Simulate a pointer move event
  //     target.dispatchEvent(
  //       new PointerEvent('pointermove', { clientX: 20, clientY: 20 })
  //     )
  //   })

  //   // Assert that the move handler has done its job correctly
  //   // For example, if it's supposed to update pan levels:
  //   expect(controls.setPanLevel).toHaveBeenCalledWith({ x: 10, y: 10 })
  //   // ... more assertions based on your actual implementation
  // })

  // test('should handle stop event correctly', () => {
  //   const controls = {
  //     setZoomLevel: jest.fn(),
  //     setPanLevel: jest.fn(),
  //     // ... other control functions and states
  //   }

  //   const { result } = renderHook(() =>
  //     useTouch(targetRef, controls /*, other parameters here...*/)
  //   )

  //   act(() => {
  //     // Simulate a pointer up event
  //     target.dispatchEvent(new PointerEvent('pointerup'))
  //   })

  //   // Assert that the stop handler has done its job correctly
  //   // For example, if it's supposed to reset some internal state or stop certain actions:
  //   // ... assertions based on your actual implementation
  // })

  // Add additional tests for other events and handlers as needed
})
