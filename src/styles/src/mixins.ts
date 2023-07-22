import { css } from 'styled-components'

export const shadow = (offset = '2px 2px') =>
  `box-shadow: ${offset} 5px 2px rgba(0, 0, 0, 0.05);`

export const box = ({
  color,
  bgColor,
  isSpecial,
}: { color?: string; bgColor?: string; isSpecial?: boolean } = {}) => {
  const colorVar = isSpecial ? 'specialText' : 'text'
  const backgroundVar = isSpecial ? 'specialBg' : 'subtle'
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
      var(--bg) 0%,
      var(--subtle) 50%,
      var(--mark) 51%,
      var(--bg) 100%
    );
    ${shadow('2px 2px')}
  `
}
