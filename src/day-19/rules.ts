import input from './input'

const rules = input
  .split('\n\n')[0]
  .split('\n')
  .reduce((rules, line) => {
    const [n, rule] = line.split(': ')
    rules.set(parseInt(n), rule)
    return rules
  }, new Map<number, string>())

export default rules
