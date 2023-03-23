import { ThemedComponent } from '@pi-lib/styles/src/theme.types'
import styled, { css } from 'styled-components'

export const StyledWorldMapContainer = styled.div(
  ({ theme: { chartBackground } }: ThemedComponent) => {
    return css`
      background: ${chartBackground};
      border: 1px solid var(--border);
      margin-right: 8px;
      position: relative;
      height: 100%;

      & div {
        position: absolute;
        font-weight: bold;
        bottom: 4px;
        text-align: center;
        font-size: 0.8em;
        width: 100%;
      }
    `
  }
)
