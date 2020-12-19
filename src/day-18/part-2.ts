import computeExpression from './compute-expression'
import input from './input'

const findEndParenthesisIndex = (line: string[], i: number): number => {
  let parenthesis = 0

  for (let j = i + 1; j < line.length; j++) {
    if (line[j] === '(') {
      ++parenthesis
    }

    if (line[j] === ')') {
      --parenthesis
    }

    if (parenthesis < 0) {
      return j
    }

    if (line[j] === '*' && parenthesis === 0) {
      return j
    }
  }

  return line.length
}

const addPrecedenceParenthesis = (line: string): string => {
  const newLine = line.split('')
  let length = newLine.length
  for (let i = 0; i < length; i++) {
    if (newLine[i] === '*') {
      const endIndex = findEndParenthesisIndex(newLine, i)
      newLine.splice(endIndex, 0, ')')
      newLine.splice(i + 1, 0, '(')

      length += 2
    }
  }

  return newLine.join('')
}

const sum = input.split('\n')
  .map(line => addPrecedenceParenthesis(line))
  .map((line: string) => computeExpression(line))
  .reduce((acc: number, n: number) => acc + n, 0)

console.log(sum)
