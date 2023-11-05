import { LinkProps } from './Link.types'
import { CustomStyledType } from '@pi-lib/styles'

/**
 * The main prop interface for the styled link
 */
export interface StyledLinkProps
  extends Pick<LinkProps, '$isMain' | '$isInactive'> {}

export type StyledLinkType = CustomStyledType<HTMLElement, StyledLinkProps>
