import getNormalizedRule, { cache as normalizedRuleCache } from './get-normalized-rule'
import messages from './messages'
import rules from './rules'

rules.set(8, '42 | 42 8')
rules.set(11, '42 31 | 42 11 31')

const rule42 = getNormalizedRule(rules, 42)
const rule31 = getNormalizedRule(rules, 31)

normalizedRuleCache.set(8, `(${rule42}+)`)
const regexpRule11 = Array(10)
  .fill(0)
  .map((_, i) => i + 1)
  .map(i => `(${rule42}{${i}}${rule31}{${i}})`)
  .join('|')
normalizedRuleCache.set(11, `(${regexpRule11})`)

const regexp = new RegExp(`^${getNormalizedRule(rules, 0)}$`)

console.log(messages.filter(m => m.match(regexp)).length)
