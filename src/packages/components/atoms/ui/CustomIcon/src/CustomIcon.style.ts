import { ReactSVG } from 'react-svg'
import styled, { css } from 'styled-components'
import { StyledIconType } from './CustomIcon.style.types'

/**
 * The styles for the SVG element
 */
export const StyledCustomIcon: StyledIconType = styled(ReactSVG)`
  > div {
    aspect-ratio: 1 / 1;
    ${({ $height }) => css`
      height: ${$height};
    `}
    ${({ $rotate }) => css`
      transform: rotate(${$rotate}deg);
    `}
  }

  svg {
    width: 100%;
    height: 100%;
    ${({ $isFilled, $color }) =>
      $isFilled &&
      css`
        fill: ${$color};
      `}
  }

  path {
    ${({ $isStroked, $color }) =>
      $isStroked &&
      css`
        stroke: ${$color};
      `}
  }
`
