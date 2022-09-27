export const getNumFromStyleStr = (styleString: string) => {
  const match = styleString.match(/\d+/)
  const value = match ? parseInt(match[0]) : 0

  if (styleString.includes('rem')) {
    const rootFontSize = getRootFontSize()
    return value * rootFontSize
  }

  return value
}

export const getRootFontSize = (): number => {
  return getNumFromStyleStr(
    window.getComputedStyle(document.body).getPropertyValue('font-size')
  )
}
