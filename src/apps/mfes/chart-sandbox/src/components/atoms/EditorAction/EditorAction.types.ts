export interface ActionProps {
  /**
   * Title for browser tooltips
   */
  title: string
  /**
   * Label for the button
   */
  label: string
  /**
   * Style prop if SVG is stroked for custom colour
   */
  isStroked?: boolean
  /**
   * Style prop if SVG is filled for custom colour
   */
  isFilled?: boolean
  /**
   * Handler for the user click/touch
   */
  onPointerUp: (...args: unknown[]) => unknown
}
