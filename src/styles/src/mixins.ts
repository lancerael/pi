import { css } from 'styled-components'

export const shadow = (offset = '2px 2px', opacity = '0.05') =>
  `box-shadow: ${offset} 5px 1px rgba(0, 0, 0, ${opacity});`

export const gradient = ({ invertGradient = false, isAlt = false } = {}) => {
  return isAlt
    ? `background: linear-gradient(to ${
        invertGradient ? 'bottom' : 'top'
      }, var(--text), var(--textSoft));`
    : `background: linear-gradient(to ${
        invertGradient ? 'bottom' : 'top'
      }, var(--dark), var(--specialShadow));`
}

export const box = ({
  color,
  bgColor,
  isSpecial,
}: { color?: string; bgColor?: string; isSpecial?: boolean } = {}) => {
  const colorVar = isSpecial ? 'subtle' : 'textSoft'
  const backgroundVar = isSpecial ? 'textSoft' : 'subtle'
  return css`
    border: 1px solid var(--shadow);
    color: ${color ? color : `var(--${colorVar})`};
    background-color: ${bgColor ?? `var(--${backgroundVar})`};
    border-radius: 6px;
    padding: 8px;
    ${shadow('2px 2px')}
  `
}

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
    ${shadow('2px 2px')}
  `
}
