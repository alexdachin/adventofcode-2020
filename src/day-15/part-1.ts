import input from './input'

const turns = 2020
const spoken = [...input]

for (let i = input.length; i < turns; i++) {
  const lastIndex = spoken.lastIndexOf(spoken[i - 1], i - 2)
  spoken.push(lastIndex === -1 ? 0 : i - 1 - lastIndex)
}

console.log(spoken[turns - 1])
