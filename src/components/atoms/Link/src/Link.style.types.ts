import { LinkProps } from './Link.types'

export interface StyledLinkProps
  extends Pick<LinkProps, '$isMain' | '$isInactive'> {}
