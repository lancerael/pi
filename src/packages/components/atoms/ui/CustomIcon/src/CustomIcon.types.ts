/**
 * The main prop interface for the component
 */
export interface CustomIconProps {
  /**
   * The source path/URL for the image
   */
  src: string
  /**
   * The optional color for the image
   */
  color?: string
  /**
   * Should it automatically fill the SVG shapes
   */
  isFilled?: boolean
  /**
   * Should it automatically color the SVG strokes
   */
  isStroked?: boolean
  /**
   * Set a specific size for the image
   */
  height?: string
  /**
   * Set a specific rotartion amount for the image in degrees
   */
  rotate?: number
}
