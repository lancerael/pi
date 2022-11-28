import { STATUS_COLOURS } from '@pi-lib/constants'
import styled, { css } from 'styled-components'
// import { standardFont } from '../../../../styles/index'

import { StyledButtonProps } from './Button.style.types'

const standardFont = 'font-family: serif;'

export const StyledButton = styled.button(
  ({ status, minWidth, margin }: StyledButtonProps) => css`
    ${standardFont}
    border: 1px solid ${STATUS_COLOURS[status]};
    color: ${STATUS_COLOURS[status]};
    background-color: white;
    border-radius: 10px;
    min-width: ${minWidth};
    padding: 10px;
    margin: ${margin};
    cursor: pointer;
    box-shadow: 2px 2px 2px 0px rgb(61 61 61 / 20%);
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
