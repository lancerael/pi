import styled, { css } from 'styled-components'
import { box } from '@pi-lib/styles'

export const StyledContainer = styled.div`
  width: auto;
  display: inline-block;
  text-align: right;
  position: relative;
  white-space: nowrap;
  width: 32px;
`

export const StyledOpener = styled.div(
  ({ isCollapsed }: any) => css`
    cursor: pointer;
    position: absolute;
    z-index: 9999;
    right: 0;
    transition-delay: 0.05s;
    ${!isCollapsed &&
    css`
      ${box()}
      padding: 0 0 0 2px;
      border-bottom: 0;
      box-shadow: none;
      svg,
      path {
        fill: var(--text) !important;
      }
    `}
    border-radius: 15px 15px 0 0;
  `
)

export const StyledCollapsibleMenu = styled.div(
  ({ isCollapsed }: any) => css`
    ${box()}
    border-radius: 5px 0 5px 5px;
    opacity: ${isCollapsed ? 0 : 1};
    position: absolute;
    top: 36px;
    right: 0;
    overflow: hidden;
    z-index: 9998;
  `
)

export const StyledMenuInner = styled.div(
  ({ isCollapsed }: any) => css`
    margin-top: ${isCollapsed ? '-200px' : '-4px'};
    margin-bottom: -4px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  `
)

export const StyledMenuItem = styled.div`
  a {
    color: var(--text);
  }
`
