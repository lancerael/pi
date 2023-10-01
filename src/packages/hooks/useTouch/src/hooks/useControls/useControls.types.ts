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
