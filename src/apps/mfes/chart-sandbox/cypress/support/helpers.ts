export const rgbToHex = (rgb: string) => {
  const [r, g, b] = rgb.match(/[\d]+/g) as string[]
  const hex = +b | (+g << 8) | (+r << 16)
  return `#${(0x1000000 + hex).toString(16).slice(1)}`
}

export const hexToRgb = (hex: string) => {
  let newHex = hex.replace(/^#/, '')
  if (newHex.length === 3) {
    newHex = newHex
      .split('')
      .map((char) => `${char}${char}`)
      .join('')
  }
  const [r, g, b] = [0, 1, 2].map((i) =>
    parseInt(newHex.substring(i * 2, i * 2 + 2), 16)
  )
  return `rgb(${r}, ${g}, ${b})`
}
