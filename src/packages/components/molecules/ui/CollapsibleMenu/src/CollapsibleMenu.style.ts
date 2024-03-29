import styled, { css } from 'styled-components'
import { Button } from 'react-aria-components'
import { DEFAULT_THEME, gradient } from '@pi-lib/styles'
import {
  StyledCollapsibleMenuProps,
  StyledLinkType,
} from './CollapsibleMenu.style.types'

/**
 * The main container for the menu styles
 */
export const StyledContainer = styled.div`
  width: auto;
  text-align: right;
  position: relative;
  white-space: nowrap;
  width: calc(20px + 0.6rem);
  height: calc(20px + 0.6rem);
`

/**
 * The styles for the opener Button
 */
export const StyledOpener: StyledLinkType = styled(Button)`
  background: none;
  cursor: pointer;
  position: absolute;
  z-index: 999;
  right: 0;
  top: -2px;
  shadow: none;
  border: none;
  transition-delay: 0.05s;
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      background: ${({ theme }) => theme.colors.special};
    `}
  padding: 0;
  margin: 0;
`

/**
 * The container for the styles in the collapsible part of the menu
 */
export const StyledCollapsibleMenu = styled.div<StyledCollapsibleMenuProps>(
  ({ $isOpen }) => css`
    ${gradient({ name: 'special', to: 'bottom' })}
    color: ${({ theme }) => theme.colors.shadowHC};
    padding: 0.5rem;
    border-radius: 5px 0 5px 5px;
    opacity: ${$isOpen ? 1 : 0};
    position: absolute;
    top: calc(21px + 0.6rem);
    right: 0;
    overflow: hidden;
    z-index: 998;
    visibility: ${$isOpen ? 'visible' : 'hidden'};
  `
)

/**
 * The styles for the innper part of the collapsible menu
 */
export const StyledMenuInner = styled.div<StyledCollapsibleMenuProps>(
  ({ $isOpen }) => css`
    margin-top: ${$isOpen ? '0' : '-200px'};
    display: flex;
    flex-direction: column;
    gap: 8px;
  `
)

/**
 * The styles for the actual menu
 */
export const StyledMenu = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style-type: none;
`

/**
 * The styles for the menu item
 */
export const StyledMenuItem = styled.li`
  margin: 0;
  padding: 0;
`

StyledOpener.defaultProps = DEFAULT_THEME
StyledCollapsibleMenu.defaultProps = DEFAULT_THEME
