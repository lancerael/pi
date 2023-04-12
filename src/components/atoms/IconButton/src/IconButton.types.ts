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
}
