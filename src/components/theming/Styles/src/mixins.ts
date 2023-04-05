import { css } from 'styled-components'

export const box = ({
  color,
  isSpecial,
}: { color?: string; isSpecial?: boolean } = {}) => {
  const borderVar = isSpecial ? 'special' : 'special'
  const colorVar = isSpecial ? 'specialText' : 'text'
  const backgroundVar = isSpecial ? 'specialBg' : 'subtle'
  return css`
    border: 1px solid var(--${borderVar});
    color: ${color ? color : `var(--${colorVar})`};
    background-color: var(--${backgroundVar});
    border-radius: 6px;
    padding: 8px;
    box-shadow: 2px 2px 2px 0px rgb(61 61 61 / 10%);
  `
}

export const formInput = (isExpanded?: boolean) => {
  return css`
    height: ${isExpanded ? '26px' : '22px'};
    background: var(--bg);
    color: var(--text);
    border: 1px solid var(--text);
    border-radius: 4px;
    padding: 0 ${isExpanded ? '2px' : '4px'};
  `
}
