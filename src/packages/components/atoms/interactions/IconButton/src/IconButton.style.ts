import styled, { css } from 'styled-components'
import { box } from '@pi-lib/styles'
import { StyledIconButtonProps, StyledIconType } from './IconButton.style.types'
import { ReactSVG } from 'react-svg'

/**
 * The main styles for the icon button
 */
export const StyledIconButton = styled.a<StyledIconButtonProps>(
  ({ size, $isSimpleButton, $rotate }) => css`
    cursor: pointer;
    display: inline-block;
    ${$rotate && `transform: rotate(${$rotate}deg)`}
    ${!$isSimpleButton &&
    css`
      ${box()}
      background: var(--specialText);
      padding: 4px;
      font-size: ${size};

      &:hover {
        background: var(--outline);
        border-color: var(--special);
      }
    `}
  `
)

/**
 * The styles for the SVG element
 */
export const StyledIcon: StyledIconType = styled(ReactSVG)`
  > div {
    aspect-ratio: 1 / 1;
    ${({ size }) => css`
      aspect-ratio: 1 / 1;
      height: ${size};
    `}
  }

  svg {
    width: 100%;
    height: 100%;
    ${({ $isFilled }) => $isFilled && 'fill: var(--special);'}
  }

  path {
    ${({ $isStroked }) => $isStroked && 'stroke: var(--special);'}
  }
`
