import styled, { css } from 'styled-components'

export const StyledRow = styled.tr(
  ({ isOdd, isExpandable }: { isOdd: boolean; isExpandable: boolean }) => css`
    background: var(--subtle);

    & td {
      text-align: center;
      font-size: 1em;
      &:not(:last-of-type) {
        border-right: 1px solid var(--mark);
      }
    }

    ${isExpandable &&
    css`
      cursor: pointer;
      &:hover {
        background: var(--subtle);
      }
    `}

    ${isOdd &&
    css`
      background: var(--border);
    `}
  `
)

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
