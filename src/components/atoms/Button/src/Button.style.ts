import { STATUS_COLOURS } from '@pi-lib/constants'
import styled, { css } from 'styled-components'
// import { standardFont } from '../../../../styles/index'

import { StyledButtonProps } from './Button.style.types'

const standardFont = 'font-family: serif;'

export const StyledButton = styled.button(({ status }: StyledButtonProps) => css`
  ${standardFont}
  border: 2px solid ${STATUS_COLOURS[status]};
  color:  ${STATUS_COLOURS[status]};
  background-color: white;
  border-radius: 15px;
  width: 220px;
  padding: 10px;
  margin: 15px;
  cursor: pointer;
  &:disabled {
    color: grey;
    cursor: default;
  }
`)
