export interface IconButtonProps
  extends Pick<
    React.HTMLProps<HTMLAnchorElement>,
    'onClick' | 'onMouseOver' | 'onMouseOut' | 'href' | 'title'
  > {
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
   * Set a specific size for the image
   */
  size?: string
}

export type StyledIconButtonProps = Pick<IconButtonProps, 'size'>
