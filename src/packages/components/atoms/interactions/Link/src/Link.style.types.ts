import { LinkProps } from './Link.types'

/**
 * The main prop interface for the styled link
 */
export interface StyledLinkProps
  extends Pick<LinkProps, '$isMain' | '$isInactive'> {}
