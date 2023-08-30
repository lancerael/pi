import { css } from 'styled-components'
import { BoxProps, GradientProps } from './theme.types'
import { boxColors, gradients } from './theme'

/**
 * A mixin generator for a css background gradient
 */
export const gradient = ({
  to = 'top',
  name = 'default',
}: GradientProps = {}) => {
  const [start, end] = gradients[name]
  return `background: linear-gradient(to ${to}, var(--${start}), var(--${end}));`
}

/**
 * A mixin generator for a css box shadow
 */
export const shadow = (offset = '2px 2px', opacity = '0.05') =>
  `box-shadow: ${offset} 5px 1px rgba(0, 0, 0, ${opacity});`

/**
 * A mixin generator for a boxed container
 */
export const box = ({ name = 'default', isInverted }: BoxProps = {}) => {
  const colors = boxColors[name]
  const [colorVar, backgroundVar] = isInverted ? colors.reverse() : colors
  return css`
    border: 1px solid var(--shadow);
    color: var(--${colorVar});
    background-color: var(--${backgroundVar});
    border-radius: 6px;
    padding: 8px;
    ${shadow()}
  `
}

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
 * A mixin generator for a chart container
 */
export const chartContainer = () => {
  return css`
    border: 1px solid var(--border);
    border-radius: 8px;
    background: linear-gradient(
      135deg,
      var(--subtle) 0%,
      var(--bg) 50%,
      var(--mark) 51%,
      var(--bg) 100%
    );
    ${shadow()}
  `
}
