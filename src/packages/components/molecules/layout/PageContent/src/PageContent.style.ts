import styled, { css } from 'styled-components'
import { StyledSidebarProps } from './PageContent.style.types'
import { shadow } from '@pi-lib/styles'

/**
 * The main container for the page content component
 */
export const StyledPageContent = styled.div<StyledSidebarProps>(
  ({ isCollapsible }) => css`
    flex: 1;
    display: flex;
    flex-direction: row;
    height: 100%;

    ${!!isCollapsible &&
    css`
      @media (max-width: 799px) {
        flex-direction: column;
      }
    `}
  `
)

/**
 * The styled element for the sidebar
 */
export const StyledSidebar = styled.div<StyledSidebarProps>(
  ({ maxWidth, isCollapsible }) => css`
    max-width: ${maxWidth ?? '100%'};
    height: auto;
    display: flex;
    flex-direction: column;
    flexgrow: 1;
    background: var(--subtle);
    color: var(--textSoft);
    border-right: 1px solid var(--border);
    padding: 16px;
    ${shadow('2px 0px')}
    ${!!isCollapsible &&
    css`
      @media (max-width: 800px) {
        height: auto;
        border-right: none;
        border-bottom: 1px solid var(--border);
        max-width: 100%;

        ${shadow('0px 2px')}
      }
    `}
  `
)

/**
 * The conatiner element for the styles of the main content section
 */
export const StyledMain = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  gap: 16px;

  @media (max-width: 800px) {
    height: calc(225px + 80vw);
  }
`
