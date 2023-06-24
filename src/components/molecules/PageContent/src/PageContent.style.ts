import styled, { css } from 'styled-components'
import { StyledSidebarProps } from './PageContent.style.types'

export const StyledPageContent = styled.div(
  ({ isCollapsible }: StyledSidebarProps) => css`
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

export const StyledSidebar = styled.div(
  ({ maxWidth, isCollapsible }: StyledSidebarProps) => css`
    max-width: ${maxWidth ?? '100%'};
    height: auto;
    display: flex;
    flex-direction: column;
    flexgrow: 1;
    background: var(--subtle);
    color: var(--textSoft);
    border-right: 1px solid var(--border);
    padding: 16px;
    ${!!isCollapsible &&
    css`
      @media (max-width: 800px) {
        height: auto;
        border-right: none;
        border-bottom: 1px solid var(--border);
        max-width: 100%;
      }
    `}
  `
)

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
