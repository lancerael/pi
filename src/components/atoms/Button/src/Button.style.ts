import styled, { css } from 'styled-components'
import { box } from '@pi-lib/styles'
import { STATUS_COLOURS } from '@pi-lib/constants'

import { StyledButtonProps } from './Button.style.types'

const standardFont = 'font-family: sans-serif;'

export const StyledButton = styled.button(
  ({ status, minWidth, margin }: StyledButtonProps) => css`
    ${standardFont}
    ${box(STATUS_COLOURS[status])}
    min-width: ${minWidth};
    margin: ${margin};
    cursor: pointer;
    &:hover {
      filter: brightness(85%);
    }
    &:disabled {
      color: grey;
      cursor: default;
      filter: brightness(95%);
    }
  `
)
