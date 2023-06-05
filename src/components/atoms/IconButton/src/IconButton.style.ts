import styled from 'styled-components'
import { box } from '@pi-lib/styles'
import { StyledIconButtonProps } from './IconButton.types'

export const StyledIconButton = styled.a`
  ${box()}
  cursor: pointer;
  display: inline-block;
  background: var(--specialText);
  padding: 4px;
  aspect-ratio: 1 / 1;
  height: ${({ size }: StyledIconButtonProps) => size};
  font-size: ${({ size }: StyledIconButtonProps) => size};

  &:hover {
    background: var(--light);
    border-color: var(--outline);
  }
`
