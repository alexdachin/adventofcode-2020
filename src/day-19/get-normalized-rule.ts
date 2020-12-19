export const cache = new Map<number, string>()
const getNormalizedRule = (rules: Map<number, string>, i: number): string => {
  if (cache.has(i)) {
    return cache.get(i) as string
  }

  const rule = rules.get(i) as string
  if (rule.startsWith('"')) {
    const result = rule.replace(/"/g, '')
    cache.set(i, result)
    return result
  }

  const subRules = rule.split(' | ')
  const result = subRules
    .map(subRule => subRule.split(' ').map(j => getNormalizedRule(rules, parseInt(j))).join(''))
    .map(subRule => `(${subRule})`)
    .join('|')

  cache.set(i, `(${result})`)
  return `(${result})`
}

export default getNormalizedRule
