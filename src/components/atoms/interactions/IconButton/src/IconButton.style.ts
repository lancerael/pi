import styled, { css } from 'styled-components'
import { box } from '@pi-lib/styles'
import { StyledIconButtonProps, StyledIconProps } from './IconButton.types'
import { ReactSVG } from 'react-svg'

export const StyledIconButton = styled.a(
  ({ size }: StyledIconButtonProps) => css`
    ${box()}
    cursor: pointer;
    display: inline-block;
    background: var(--specialText);
    padding: 4px;
    font-size: ${size};

    &:hover {
      background: var(--outline);
      border-color: var(--special);
    }
  `
)

export const StyledIcon = styled(ReactSVG)`
  > div {
    aspect-ratio: 1 / 1;
    ${({ size }: StyledIconButtonProps) => css`
      aspect-ratio: 1 / 1;
      height: ${size};
    `}
  }
  svg {
    width: 100%;
    height: 100%;
    ${({ $isFilled }: StyledIconProps) => $isFilled && 'fill: var(--dark);'}
  }

  path {
    ${({ $isStroked }: StyledIconProps) => $isStroked && 'stroke: var(--dark);'}
  }
`