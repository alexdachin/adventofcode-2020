import input from './input'

let mask: string
const memory: Record<string, number> = {}

const applyMask = (value: number, mask: string): number => {
  const result: string[] = value
    .toString(2)
    .padStart(36, '0')
    .split('')

  for (let i = 0; i < 36; i++) {
    if (mask[i] !== 'X') {
      result[i] = mask[i]
    }
  }

  return parseInt(result.join(''), 2)
}

input
  .split('\n')
  .forEach(line => {
    const [variable, value] = line.split(' = ')

    if (variable === 'mask') {
      mask = value
    }

    if (variable.startsWith('mem')) {
      const address = variable.replace('mem[', '').replace(']', '')
      memory[address] = applyMask(parseInt(value), mask)
    }
  })

const sum = Object.values(memory).reduce((sum, value) => sum + value, 0)

console.log(sum)
