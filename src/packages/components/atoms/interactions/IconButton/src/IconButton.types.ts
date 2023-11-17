import { TestProp } from '@pi-lib/types'

/**
 * The main prop interface for the component
 */
export interface IconButtonProps
  extends React.HTMLProps<HTMLAnchorElement>,
    TestProp {
  /**
   * The source path/URL for the image
   */
  src: string
  /**
   * Should it open in an new window
   */
  isExternal?: boolean
  /**
   * Should it show a small version of the button
   */
  isSmall?: boolean
  /**
   * Should it automatically fill the SVG shapes
   */
  isFilled?: boolean
  /**
   * Should it automatically color the SVG strokes
   */
  isStroked?: boolean
  /**
   * Should it simplify the button style
   */
  isSimple?: boolean
  /**
   * Should it be purely visual
   */
  isIconOnly?: boolean
  /**
   * Set a specific size for the image
   */
  fontSize?: string
  /**
   * Set a specific rotartion amount for the image in degrees
   */
  rotate?: number
}
