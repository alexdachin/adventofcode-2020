import input from './input'

const numbers = input
  .split('\n')
  .map(n => parseInt(n))

const getProduct = () => {
  for (let i = 0; i < numbers.length - 1; ++i) {
    for (let j = i + 1; j < numbers.length; ++j) {
      if (i !== j && numbers[i] + numbers[j] === 2020) {
        return numbers[i] * numbers[j]
      }
    }
  }
}

console.log(getProduct())
