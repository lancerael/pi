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

export const StyledOpener = styled.button(
  ({ isOpen }: any) => css`
    border: 0;
    padding: 0;
    background: none;
    cursor: pointer;
    position: absolute;
    z-index: 9999;
    right: 0;
    transition-delay: 0.05s;
    border-radius: 15px;
    ${isOpen &&
    css`
      ${box()}
      padding: 0 0 0 2px;
      border-bottom: 0;
      box-shadow: none;
      svg {
        fill: var(--text) !important;
      }
      path {
        stroke: var(--text) !important;
      }
      border-radius: 15px 15px 0 0;
    `}
  `
)

export const StyledCollapsibleMenu = styled.div(
  ({ isOpen }: any) => css`
    ${box()}
    border-radius: 5px 0 5px 5px;
    opacity: ${isOpen ? 1 : 0};
    position: absolute;
    top: 36px;
    right: 0;
    overflow: hidden;
    z-index: 9998;
  `
)

export const StyledMenuInner = styled.div(
  ({ isOpen }: any) => css`
    margin-top: ${isOpen ? '-4px' : '-200px'};
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
