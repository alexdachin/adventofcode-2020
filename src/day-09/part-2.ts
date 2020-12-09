import input from './input'

const numbers = input
  .split('\n')
  .map(n => parseInt(n))

const part1 = 731031916

for (let i = 0; i < numbers.length; i++) {
  let acc = part1
  let j = i
  do {
    acc -= numbers[j]
    j++
  } while (acc > 0 && j < numbers.length)

  if (acc === 0) {
    const contiguous = numbers.slice(i, j - 1)
    console.log(Math.min(...contiguous) + Math.max(...contiguous))
    break
  }
}
