import styled, { css } from 'styled-components'
import { box } from '@pi-lib/styles'
import { StyledIconButtonProps, StyledIconType } from './IconButton.style.types'
import { ReactSVG } from 'react-svg'

/**
 * The main styles for the icon button
 */
export const StyledIconButton = styled.a<StyledIconButtonProps>(
  ({ $fontSize, $isSimple, $rotate, disabled }) => css`
    cursor: pointer;
    display: inline-block;
    ${disabled && 'pointer-events: none;'}
    ${$rotate && `transform: rotate(${$rotate}deg)`}
    ${!$isSimple &&
    css`
      ${box()}
      background: var(--specialText);
      padding: 4px;
      font-size: ${$fontSize};

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
    ${({ $fontSize }) => css`
      aspect-ratio: 1 / 1;
      height: ${$fontSize};
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
