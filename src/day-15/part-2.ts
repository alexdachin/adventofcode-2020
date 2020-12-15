import input from './input'

const turns = 30000000
let oldNumber = input[input.length - 1]
const cache: Map<number, number> = new Map()

for (let i = 0; i < input.length - 1; i++) {
  cache.set(input[i], i + 1)
}

for (let i = input.length; i < turns; i++) {
  const lastIndex = cache.get(oldNumber)
  const newNumber = lastIndex ? i - lastIndex : 0

  cache.set(oldNumber, i)
  oldNumber = newNumber
}

console.log(oldNumber)
