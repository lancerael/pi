import { PanLevel, TouchControls } from './hooks/useControls'

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
   * The range of allowable zoom levels..
   */
  zoomRange?: NumberRange
  /**
   * The range of allowable pan levels for both x and y axis.
   */
  panRange?: PanRange
  /**
   * An optional callback function to reset the state.
   */
  resetCallback?: () => void
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
