export interface LinkProps
  extends Pick<
    React.HTMLProps<HTMLAnchorElement>,
    'onClick' | 'onMouseOver' | 'onMouseOut' | 'children' | 'title' | 'href'
  > {
  /**
   * Is it an external link?
   */
  isExternal?: boolean
}
