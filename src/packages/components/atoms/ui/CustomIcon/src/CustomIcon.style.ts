import { ReactSVG } from 'react-svg'
import styled, { css } from 'styled-components'
import { StyledIconType } from './CustomIcon.style.types'
import { DEFAULT_THEME } from '@pi-lib/styles'

/**
 * The styles for the SVG element
 */
export const StyledCustomIcon: StyledIconType = styled(ReactSVG)`
  > div {
    aspect-ratio: 1 / 1;
    ${({ $height, theme }) => css`
      height: ${$height ?? theme.fontSizes.medium};
    `}
    ${({ $rotate }) => css`
      transform: rotate(${$rotate}deg);
    `}
  }

  svg {
    width: 100%;
    height: 100%;
    ${({ $isFilled, $color, theme }) =>
      $isFilled &&
      css`
        fill: ${$color ?? theme.colors.special};
      `}
  }

  path {
    ${({ $isStroked, $color, theme }) =>
      $isStroked &&
      css`
        stroke: ${$color ?? theme.colors.special};
      `}
  }
`

StyledCustomIcon.defaultProps = DEFAULT_THEME
