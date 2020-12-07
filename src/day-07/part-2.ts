import rules from './rules'

const countInside = (outsideColor: string): number => {
  const count = Object.values(rules[outsideColor])
    .reduce((sum, current) => sum + current, 0)

  const recursiveCount = Object.keys(rules[outsideColor])
    .map(insideColor => rules[outsideColor][insideColor] * countInside(insideColor))
    .reduce((sum, current) => sum + current, 0)

  return count + recursiveCount
}

console.log(countInside('shiny gold'))
