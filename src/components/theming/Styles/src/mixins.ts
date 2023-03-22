export const box = ({
  color,
  isSpecial,
}: { color?: string; isSpecial?: boolean } = {}) => {
  const borderVar = isSpecial ? 'special' : 'border'
  const colorVar = isSpecial ? 'specialText' : 'textSoft'
  const backgroundVar = isSpecial ? 'specialBg' : 'subtle'
  return `
    border: 2px solid var(--${borderVar});
    color: ${color ? color : `var(--${colorVar})`};
    background-color: var(--${backgroundVar});
    border-radius: 6px;
    padding: 8px;
    box-shadow: 2px 2px 2px 0px rgb(61 61 61 / 20%);
  `
}
