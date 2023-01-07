import styled, { css } from 'styled-components'

export const StyledRow = styled.tr(
  ({ isOdd, isExpandable }: { isOdd: boolean; isExpandable: boolean }) => css`
    background: var(--subtle);

    & td {
      font-size: 1em;
      &:not(:last-of-type) {
        border-right: 1px solid var(--special);
      }
    }

    ${isExpandable &&
    css`
      cursor: pointer;
      &:hover {
        background: var(--special);
      }
    `}

    ${isOdd &&
    css`
      background: var(--border);
    `}
  `
)

export const StyledDetails = styled.tr`
  & > td {
    transition: all 0.5s;
    background: var(--shadow);
  }
`
