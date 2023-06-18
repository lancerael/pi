import { css } from 'styled-components'

export const box = ({
  color,
  bgColor,
  isSpecial,
}: { color?: string; bgColor?: string; isSpecial?: boolean } = {}) => {
  const colorVar = isSpecial ? 'specialText' : 'text'
  const backgroundVar = isSpecial ? 'specialBg' : 'border'
  return css`
    border: 1px solid var(--shadow);
    color: ${color ? color : `var(--${colorVar})`};
    background-color: ${bgColor ?? `var(--${backgroundVar})`};
    border-radius: 6px;
    padding: 8px;
    box-shadow: 2px 2px 2px 0px rgb(61 61 61 / 10%);
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
