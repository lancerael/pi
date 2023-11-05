import styled, { css } from 'styled-components'
import { Button } from 'react-aria-components'
import { box } from '@pi-lib/styles'
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
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0%);
  transition-delay: 0.05s;
  ${({ isOpen }) =>
    isOpen &&
    css`
      ${box({ name: 'alt' })}
      box-shadow: none;
      border-radius: 5px 5px 0 0;
      border-bottom: 1px solid var(--border);
      svg {
        fill: var(--text) !important;
      }
      .strokes path,
      .strokes polyline {
        stroke: var(--text) !important;
      }
    `}
  padding: 0;
  margin: 0;
`

/**
 * The container for the styles in the collapsible part of the menu
 */
export const StyledCollapsibleMenu = styled.div<StyledCollapsibleMenuProps>(
  ({ isOpen }) => css`
    ${box({ name: 'alt' })}
    border-radius: 5px 0 5px 5px;
    opacity: ${isOpen ? 1 : 0};
    position: absolute;
    top: calc(22px + 0.6rem);
    right: 0;
    overflow: hidden;
    z-index: 998;
    visibility: ${isOpen ? 'visible' : 'hidden'};
  `
)

/**
 * The styles for the innper part of the collapsible menu
 */
export const StyledMenuInner = styled.div<StyledCollapsibleMenuProps>(
  ({ isOpen }) => css`
    margin-top: ${isOpen ? '0' : '-200px'};
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
`

/**
 * The styles for the menu item
 */
export const StyledMenuItem = styled.li`
  margin: 0;
  padding: 0;
`
