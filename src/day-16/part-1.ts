import { isValidFieldValue } from './fields'
import input from './input'

const [, , nearbyTicketsRaw] = input
  .replace('nearby tickets:\n', '')
  .split('\n\n')

const errorRate = nearbyTicketsRaw
  .split('\n')
  .map(line => line.split(','))
  .flat()
  .map(n => parseInt(n))
  .filter(n => !isValidFieldValue(n))
  .reduce((sum, n) => sum + n, 0)

console.log(errorRate)
