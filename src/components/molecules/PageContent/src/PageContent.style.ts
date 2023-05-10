import styled, { css } from 'styled-components'
import { StyledSidebarProps } from './PageContent.style.types'

export const StyledPageContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`

export const StyledSidebar = styled.div`
  ${({ maxWidth, isCollapsible }: StyledSidebarProps) => css`
    max-width: ${maxWidth ?? '100%'};
    height: auto;
    display: flex;
    flex-direction: column;
    flexgrow: 1;
    background: var(--subtle);
    color: var(--textSoft);
    borderright: 1px solid var(--border);
    padding: 16px;

    @media (max-width: 800px) {
      height: auto;
      borderright: none;
      borderbottom: 1px solid var(--border);
      ${!!isCollapsible && 'max-width: 100%;'}
    }
  `}
`

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
