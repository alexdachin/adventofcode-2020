import rules from './rules'

const canContain = (outsideColor: string, insideColor: string): boolean => {
  const currentInsideColors = Object.keys(rules[outsideColor])

  if (currentInsideColors.length === 0) {
    return false
  }

  if (currentInsideColors.includes(insideColor)) {
    return true
  }

  return currentInsideColors.some(color => canContain(color, insideColor))
}

console.log(
  Object.keys(rules)
    .filter(outsideColor => canContain(outsideColor, 'shiny gold'))
    .length,
)
