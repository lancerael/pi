import styled, { css } from 'styled-components'
import { box } from '@pi-lib/styles'
import { StyledIconButtonProps } from './IconButton.types'

export const StyledIconButton = styled.a(
  ({ size }: StyledIconButtonProps) => css`
    ${box()}
    cursor: pointer;
    display: inline-block;
    background: var(--specialText);
    padding: 4px;
    aspect-ratio: 1 / 1;
    height: ${size};
    font-size: ${size};

    &:hover {
      background: var(--light);
      border-color: var(--outline);
    }
  `
)
