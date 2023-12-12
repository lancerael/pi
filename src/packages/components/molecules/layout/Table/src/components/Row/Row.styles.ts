import styled, { css } from 'styled-components'
import { StyledRowProps } from './Row.styles.types'
import { DEFAULT_THEME } from '@pi-lib/styles'

/**
 * The main styles for the table row
 */
export const StyledRow = styled.tr<StyledRowProps>(
  ({ $isOdd, $isExpandable }) => css`
    background: ${({ theme }) => theme.colors.subtle};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-width: 0 1px;

    ${$isExpandable &&
    css`
      cursor: pointer;
      &:hover {
        background: ${({ theme }) => theme.colors.border};
      }
    `}

    ${$isOdd &&
    css`
      background: ${({ theme }) => theme.colors.mark};
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
    background: ${({ theme }) => theme.colors.shadow};
    position: relative;
    overflow: hidden;

    & > div {
      position: absolute;
    }
  }
`

StyledRow.defaultProps = DEFAULT_THEME
StyledDetails.defaultProps = DEFAULT_THEME
