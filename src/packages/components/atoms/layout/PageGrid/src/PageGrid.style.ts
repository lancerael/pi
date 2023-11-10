import styled, { css } from 'styled-components'
import { StyledPageGridProps } from './PageGrid.style.types'

export const StyledPageGrid = styled.div<StyledPageGridProps>(
  ({ $width }) => css`
    --padding: 1rem;
    --content-width: ${$width}px;
    --outer-cols: minmax(var(--padding), 1fr);
    --inner-col: min(100% - (var(--padding) * 2), var(--content-width));

    display: grid;
    grid-template-columns:
      [full-start]
      var(--outer-cols)
      [inner-start]
      var(--inner-col)
      [inner-end]
      var(--outer-cols)
      [full-end];

    & > :not(.pi-page-grid-full),
    .pi-page-grid-full > :not(.pi-page-grid-full) {
      grid-column: inner;
    }

    & > .pi-page-grid-full {
      grid-column: full;
      display: grid;
      grid-template-columns: inherit;
    }
  `
)
