import { LinkProps as RouterLinkProps } from 'react-router-dom'

export interface LinkProps
  extends Pick<
    React.HTMLProps<HTMLAnchorElement>,
    'onPointerUp' | 'onMouseOver' | 'onMouseOut' | 'children' | 'title' | 'href'
  > {
  /**
   * Is it an external link?
   */
  $isExternal?: boolean
  /**
   * Is it main navigation link?
   */
  $isMain?: boolean
  /**
   * Is it inactive?
   */
  $isInactive?: boolean
  /**
   * Is it a react router link?
   */
  to?: RouterLinkProps['to']
}
