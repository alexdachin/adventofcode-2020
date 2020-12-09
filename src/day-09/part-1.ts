import input from './input'

const numbers = input
  .split('\n')
  .map(n => parseInt(n))

const hasPairSum = (numbers: number[], n: number): boolean => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] !== numbers[j] && numbers[i] + numbers[j] === n) {
        return true
      }
    }
  }

  return false
}

for (let i = 25; i < numbers.length; i++) {
  const preamble = numbers.slice(i - 25, i)
  if (!hasPairSum(preamble, numbers[i])) {
    console.log(numbers[i])
    break
  }
}
