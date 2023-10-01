/**
 * Props interface for the `useTouch` hook.
 */
export interface UseTouchProps<T> {
  /**
   * The reference to the target element the touch controls are added to.
   */
  targetRef: React.RefObject<T>
  /**
   * The touch controls object that includes methods for setting zoom and pan levels.
   */
  controls: TouchControls
  /**
   * The range of allowable zoom levels..
   */
  zoomRange?: NumberRange
  /**
   * The range of allowable pan levels for both x and y axis.
   */
  panRange?: [NumberRange, NumberRange]
  /**
   * An optional callback function to reset the state.
   */
  resetCallback?: () => void
}

/**
 * Represents the pan levels on both x and y axis.
 */
export interface PanLevel {
  /**
   * The pan level on the x-axis.
   */
  x: number
  /**
   * The pan level on the y-axis.
   */
  y: number
}

/**
 * Interface representing the touch controls.
 */
export interface TouchControls {
  /**
   * The current zoom level.
   */
  zoomLevel: number
  /**
   * The current pan levels on both x and y axis.
   */
  panLevel: PanLevel
  /**
   * Function to set the zoom level.
   */
  setZoomLevel: React.Dispatch<React.SetStateAction<number>>
  /**
   * Function to set the pan level.
   */
  setPanLevel: React.Dispatch<React.SetStateAction<PanLevel>>
}

/**
 * Interface representing the trackers used in touch controls.
 */
export interface Trackers {
  /**
   * Whether the touch control is currently pressed.
   */
  isPressed: boolean
  /**
   * The previous pinch distance.
   */
  oldPinchDist: number
  /**
   * The previous pan change level.
   */
  oldPanChange: PanLevel
  /**
   * The active pointers with their pageX and pageY values, as well as previous values.
   */
  activePointers: {
    [key: number]: Pick<PointerEvent, 'pageX' | 'pageY'> & {
      oldPageX?: number
      oldPageY?: number
    }
  }
  /**
   * Function to clear the transition.
   */
  clearTransition: () => void
}

/**
 * Type representing a range of numbers.
 */
export type NumberRange = [number, number]

export type ActionMethods = 'addEventListener' | 'removeEventListener'
