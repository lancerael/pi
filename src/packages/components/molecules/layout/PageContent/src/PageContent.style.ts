import styled, { css } from 'styled-components'
import { StyledMainProps, StyledSidebarProps } from './PageContent.style.types'
import { DEFAULT_THEME, shadow } from '@pi-lib/styles'

/**
 * The main container for the page content component
 */
export const StyledPageContent = styled.div<StyledSidebarProps>(
  ({ $isCollapsible }) => css`
    flex: 1;
    display: flex;
    flex-direction: row;
    height: 100%;

    ${!!$isCollapsible &&
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
  ({ $maxWidth, $isCollapsible }) => css`
    max-width: ${$maxWidth ?? '100%'};
    height: auto;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background: ${({ theme }) => theme.colors.subtle};
    color: ${({ theme }) => theme.colors.textSoft};
    border-right: 1px solid ${({ theme }) => theme.colors.border};
    padding: 1rem;
    ${shadow({ offset: '2px 0px' })}
    ${!!$isCollapsible &&
    css`
      @media (max-width: 800px) {
        height: auto;
        border-right: none;
        border-bottom: 1px solid ${({ theme }) => theme.colors.border};
        max-width: 100%;

        ${shadow({ offset: '0px 2px' })}
      }
    `}
  `
)

/**
 * The conatiner element for the styles of the main content section
 */
export const StyledMain = styled.div<StyledMainProps>(
  ({ $isFullScroller }) => css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    gap: 1rem;
    min-width: 0;
    ${!$isFullScroller &&
    css`
      overflow: auto;
    `}

    @media (max-width: 800px) {
      height: calc(225px + 80vw);
    }
  `
)

StyledSidebar.defaultProps = DEFAULT_THEME
