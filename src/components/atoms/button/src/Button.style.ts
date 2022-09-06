import { STATUS_COLOURS } from '@pi/constants'
import styled, { css } from 'styled-components'
// import { standardFont } from '../../../../styles/index'

import { StyledButtonProps } from './Button.style.types'

const standardFont = ''

export const StyledButton = styled.button(({ status }: StyledButtonProps) => css`
  ${standardFont}
  border: 2px solid ${STATUS_COLOURS[status]};
  color:  ${STATUS_COLOURS[status]};
  background-color: white;
  width: 220px;
  padding: 15px 15px 13px 15px;
  margin: 15px;
  cursor: pointer;
  &:disabled {
    color: grey;
    cursor: default;
  }
`)
