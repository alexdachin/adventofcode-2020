import computeExpression from './compute-expression'
import input from './input'

const sum = input.split('\n')
  .map(line => computeExpression(line))
  .reduce((acc, n) => acc + n, 0)

console.log(sum)
