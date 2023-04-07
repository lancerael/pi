const fnRgbTohex = (sRgb) => {
  if (sRgb.match(/\#/)) {
    return sRgb
  }
  let [iRed, iGreen, iBlue] = sRgb.match(/[\d]+/g)
  var sHex = iBlue | (iGreen << 8) | (iRed << 16)
  return `#${(0x1000000 + sHex).toString(16).slice(1)}`
}

export { fnRgbTohex }
