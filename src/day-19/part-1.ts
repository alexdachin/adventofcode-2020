import getNormalizedRule from './get-normalized-rule'
import messages from './messages'
import rules from './rules'

const regexp = new RegExp(`^${getNormalizedRule(rules, 0)}$`)

console.log(messages.filter(m => m.match(regexp)).length)
