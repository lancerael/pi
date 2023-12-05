import { CustomStyledType } from '@pi-lib/styles'

/**
 * The prop interface for the styled collapsible menu div
 */
export interface StyledCollapsibleMenuProps {
  /**
   * The menu is collapsed or open
   */
  $isOpen?: boolean
}

export type StyledLinkType = CustomStyledType<
  HTMLElement,
  StyledCollapsibleMenuProps
>
