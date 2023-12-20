import { Coords, SimpleTouchState, TouchControls } from './hooks/useControls'

export type PanRange = [NumberRange, NumberRange]

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
   * The central point to zoom from for a zoom offset
   */
  zoomCenter?: NumberRange
  /**
   * The range of allowable zoom levels..
   */
  zoomRange?: NumberRange
  /**
   * The range of allowable pan levels for both x and y axis.
   */
  panRange?: PanRange
  /**
   * A custom operation to run when updating the state
   */
  modifier?: (modifierVal: SimpleTouchState) => SimpleTouchState
  /**
   * If the UI is a scroller, we offset the center when zooming
   */
  isScroller?: boolean
  /**
   * An optional callback function to reset the state.
   */
  resetCallback?: () => void
  /**
   * An optional callback function to signal the touch stop
   */
  stopCallback?: () => void
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
  oldPanChange: Coords
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
  /**
   * Ranges for the extennd of the zoom and pan
   */
  ranges: {
    panRange: PanRange
    zoomRange: NumberRange
  }
  /**
   * Track the controls so we always have access to the latest value
   */
  controls: SimpleTouchState
}

/**
 * Type representing a range of numbers.
 */
export type NumberRange = [number, number]

export type ActionMethods = 'addEventListener' | 'removeEventListener'
