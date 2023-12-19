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
   * The center of the zoom target
   */
  zoomCenter: Coords
  /**
   * Pan offset based on the zoom level
   */
  zoomOffset: Coords
  /**
   * Pan coords with the offset applied
   */
  panWithOffset: Coords
}

export interface TouchOptions
  extends Partial<Omit<TouchState, 'zoomOffset' | 'panWithOffset'>> {
  /**
   * The modifier for updating the touch values - like middleware
   */
  modifier?: (modifierVal: SimpleTouchState) => SimpleTouchState
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

export type SimpleTouchState = Pick<TouchState, 'pan' | 'zoom'>

export type TouchStateSignals = Record<string, Signal<TouchState>>
