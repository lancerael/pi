import { css } from 'styled-components'
import { BoxProps, GradientProps, ShadowProps } from '../../theme.types'
import { boxColors, gradients } from '../../theme'

/**
 * A mixin generator for a css background gradient
 */
export const gradient = ({
  to = 'top',
  name = 'default',
  isTransparent,
}: GradientProps = {}) => {
  const [start, end] = gradients[name]
  return css`
    background: linear-gradient(
      to ${to},
      var(--${start}${isTransparent ? 'A' : ''}),
      var(--${end}${isTransparent ? 'A' : ''})
    );
  `
}

/**
 * A mixin generator for a subtle mask fade effect
 */
export const maskGradient = ({ to = 'bottom' }: GradientProps = {}) => {
  return css`
    --mask: linear-gradient(
      to ${to},
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    mask-image: var(--mask);
    -webkit-mask-image: var(--mask);
  `
}

/**
 * A mixin generator for a css box shadow
 */
export const shadow = ({
  offset = '2px 2px',
  opacity = '0.1',
}: ShadowProps = {}) =>
  css`
    box-shadow: ${offset} 5px 1px rgba(0, 0, 0, ${opacity});
  `

/**
 * A mixin generator for a form input
 */
export const formInput = (isExpanded?: boolean) => {
  return css`
    height: ${isExpanded ? '1.4em' : '1.2em'};
    background: var(--bg);
    color: var(--text);
    border: 1px solid var(--text);
    border-radius: 4px;
    padding: 0 ${isExpanded ? '0.1em' : '0.2em'};
    font-size: 1em;
  `
}

/**
 * A mixin generator for a boxed container
 */
export const box = ({
  name = 'default',
  isInverted,
  isTransparent,
  shadowProps,
}: BoxProps = {}) => {
  const colors = [...boxColors[name]]
  if (isInverted) colors.reverse()
  const [colorVar, backgroundVar] = colors

  return css`
    border: 1px solid var(--${isInverted ? 'textStrong' : 'border'});
    color: var(--${colorVar});
    background-color: var(--${backgroundVar}${isTransparent && 'A'});
    border-radius: 6px;
    padding: 8px;
    ${shadowProps !== null && shadow(shadowProps)}
  `
}

/**
 * A mixin generator for a chart container
 */
export const container = () => {
  return css`
    ${box()}
    background: linear-gradient(
      135deg,
      var(--subtleA) 0%,
      var(--bgA) 50%,
      var(--mark) 51%,
      var(--bgA) 100%
    );
  `
}
