import input from './input'

let mask: string
const memory: Record<string, number> = {}

const applyMask = (value: number, mask: string): number[] => {
  const result: string[] = value
    .toString(2)
    .padStart(36, '0')
    .split('')

  for (let i = 0; i < 36; i++) {
    if (mask[i] !== '0') {
      result[i] = mask[i]
    }
  }

  let possibleValues: string[] = ['']

  for (const bit of result) {
    const oldValues: string[] = [...possibleValues]

    if (bit !== 'X') {
      possibleValues = oldValues.map(value => `${value}${bit}`)
    } else {
      possibleValues = [
        ...oldValues.map(value => `${value}0`),
        ...oldValues.map(value => `${value}1`),
      ]
    }
  }

  return possibleValues.map(value => parseInt(value, 2))
}

input
  .split('\n')
  .forEach(line => {
    const [variable, value] = line.split(' = ')

    if (variable === 'mask') {
      mask = value
    }

    if (variable.startsWith('mem')) {
      const initialAddress = variable.replace('mem[', '').replace(']', '')
      const addresses = applyMask(parseInt(initialAddress), mask)
      for (const address of addresses) {
        memory[address] = parseInt(value)
      }
    }
  })

const sum = Object.values(memory).reduce((sum, value) => sum + value, 0)

console.log(sum)
