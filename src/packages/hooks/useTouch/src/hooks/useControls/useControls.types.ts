import { Signal } from 'signals-react-safe'

/**
 * Interface representing the touch controls.
 */
export interface TouchControls {
  /**
   * The current state for the zoom and pan levels
   */
  touchState: TouchState
  /**
   * The current state for the zoom and pan levels
   */
  touchStateSignal: Signal<TouchState>
  /**
   * Function to set the zoom and pan levels.
   */
  setTouchState: (options: TouchOptions) => void
}

export interface TouchState {
  /**
   * The pan levels on both x and y axis.
   */
  pan: Coords
  /**
   * The zoom ratio
   */
  zoom: number
  /**
   * Pan offset based on the zoom level
   */
  zoomOffset: Coords
  /**
   * Pan coords with the offset applied
   */
  panWithOffset: Coords
  /**
   * Sizes for the ocntainer to calculate offset
   */
  sizes: Sizes
}

export interface TouchOptions
  extends Partial<Omit<TouchState, 'zoomOffset' | 'panWithOffset'>> {
  /**
   * The modifier for updating the touch values - like middleware
   */
  modifier?: (modifierVal: SimpleTouchState) => SimpleTouchState
  /**
   * If the interface is a scroller, we offset the center
   */
  isScroller?: boolean
}

/**
 * The combination of an x and y value
 */
export interface Coords {
  /**
   * The value  on the x-axis.
   */
  x: number
  /**
   * The value on the y-axis.
   */
  y: number
}

/**
 * The combination of width and height
 */
export interface Sizes {
  /**
   * The width
   */
  width: number
  /**
   * The height
   */
  height: number
}

export type SimpleTouchState = Pick<TouchState, 'pan' | 'zoom'>

export type TouchStateSignals = Record<string, Signal<TouchState>>
