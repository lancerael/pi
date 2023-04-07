export interface IconButtonProps {
  /**
   * The url to link to
   */
  href?: string
  /**
   * The source of the image
   */
  src: string
  /**
   * The title for the tooltip
   */
  title?: string
  /**
   * Should it open in an ew window
   */
  isExternal?: boolean
  /**
   * The click handler
   */
  onClick?: (e: any) => void
}
