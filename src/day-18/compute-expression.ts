type Operator = '+' | '*' | null
type StackItem = {
  acc: number
  operator: Operator
}

const computeExpression = (line: string): number => {
  let i = 0
  const stack: StackItem[] = [{
    acc: 0,
    operator: null,
  }]

  while (i < line.length) {
    if (line[i] === '+') {
      stack[stack.length - 1].operator = '+'
    }

    if (line[i] === '*') {
      stack[stack.length - 1].operator = '*'
    }

    if (line[i] === '(') {
      stack.push({
        operator: null,
        acc: 0,
      })
    }

    let numberValue = null
    if (line[i] === ')') {
      numberValue = stack.pop()?.acc ?? 0
    }

    if (line[i].match(/\d/)) {
      numberValue = parseInt(line[i])
    }

    if (numberValue !== null) {
      if (stack[stack.length - 1].operator === null) {
        stack[stack.length - 1].acc = numberValue
      }

      if (stack[stack.length - 1].operator === '+') {
        stack[stack.length - 1].acc += numberValue
      }

      if (stack[stack.length - 1].operator === '*') {
        stack[stack.length - 1].acc *= numberValue
      }
    }

    i++
  }

  return stack.pop()?.acc ?? 0
}

export default computeExpression
