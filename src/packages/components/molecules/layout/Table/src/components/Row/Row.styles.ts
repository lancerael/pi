import styled, { css } from 'styled-components'
import { StyledRowProps } from './Row.styles.types'

/**
 * The main styles for the table row
 */
export const StyledRow = styled.tr<StyledRowProps>(
  ({ isOdd, isExpandable }) => css`
    background: var(--subtle);
    border: 1px solid var(--border);
    border-width: 0 1px;

    ${isExpandable &&
    css`
      cursor: pointer;
      &:hover {
        background: var(--border);
      }
    `}

    ${isOdd &&
    css`
      background: var(--mark);
    `}
  `
)

/**
 * The container row for the expanded content
 */
export const StyledDetails = styled.tr`
  & > td,
  & > div {
    transition: all 1s;
  }

  & > td {
    background: var(--shadow);
    position: relative;
    overflow: hidden;

    & > div {
      position: absolute;
    }
  }
`
