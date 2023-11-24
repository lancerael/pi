export interface StyledLineProps {
  /**
   * Is the current line visible
   */
  $isVisible?: boolean
  /**
   * The time in ms before the next text fade
   */
  $holdTime?: number
  /**
   * The time in ms for the text fade
   */
  $fadeTime?: number
}
