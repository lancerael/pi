import { TransientProps } from '@pi-lib/utils'
import { LinkProps } from './Link.types'
import { CustomStyledType } from '@pi-lib/styles'

/**
 * The main prop interface for the styled link
 */
export type StyledLinkProps = TransientProps<
  Pick<LinkProps, 'isMain' | 'isInactive' | 'color'>
>

export type StyledLinkType = CustomStyledType<HTMLElement, StyledLinkProps>
