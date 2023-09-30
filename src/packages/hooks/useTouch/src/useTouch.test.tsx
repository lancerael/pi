import { act, renderHook } from '@testing-library/react'
import { expect } from 'vitest'
import { JSDOM } from 'jsdom'
import { useTouch } from './'

// Add PointerEvent to the global object
const dom = new JSDOM()
global.PointerEvent = dom.window.PointerEvent

describe('useTouch Hook', () => {
  let target: HTMLDivElement
  let targetRef: React.RefObject<HTMLDivElement>

  beforeEach(() => {
    target = document.createElement('div')
    document.body.appendChild(target)
    targetRef = { current: target }
  })

  afterEach(() => {
    document.body.removeChild(target)
  })

  test('should handle start event correctly', () => {
    const controls = {
      setZoomLevel: vi.fn(),
      setPanLevel: vi.fn(),
      zoomLevel: 0,
      panLevel: {
        x: 0,
        y: 0,
      },
    }

    const { result } = renderHook(() => useTouch({ targetRef, controls }))

    act(() => {
      // Simulate a pointer down event
      target.dispatchEvent(
        new PointerEvent('pointerdown', { clientX: 10, clientY: 10 })
      )
    })

    // Assert that the start handler has done its job correctly
    // For example, if it's supposed to update some internal state or call control methods:
    expect(controls.setZoomLevel).not.toHaveBeenCalled()
    expect(controls.setPanLevel).not.toHaveBeenCalled()
    // ... more assertions based on your actual implementation
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
