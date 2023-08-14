import { SelectorProp } from '@pi-lib/types'

export interface IconButtonProps
  extends Pick<
      React.HTMLProps<HTMLAnchorElement>,
      'onPointerUp' | 'onMouseOver' | 'onMouseOut' | 'href' | 'title'
    >,
    SelectorProp {
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
  $isFilled?: boolean
  /**
   * Should it automatically color the SVG strokes
   */
  $isStroked?: boolean
  /**
   * Set a specific size for the image
   */
  size?: string
}

export type StyledIconButtonProps = Pick<IconButtonProps, 'size'>

export type StyledIconProps = Pick<
  IconButtonProps,
  'src' | '$isFilled' | '$isStroked'
>
