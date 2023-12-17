/**
 * Interface representing the touch controls.
 */
export interface TouchControls {
  /**
   * The current state for the zoom and pan levels
   */
  touchState: TouchState
  /**
   * Function to set the zoom and pan levels.
   */
  setTouchState: React.Dispatch<React.SetStateAction<TouchState>>
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

export interface TouchState {
  pan: PanLevel
  zoom: number
}
