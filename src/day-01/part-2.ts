import input from './input'

const numbers = input
  .split('\n')
  .map(n => parseInt(n))

const getProduct = () => {
  for (let i = 0; i < numbers.length - 2; ++i) {
    for (let j = i + 1; j < numbers.length - 1; ++j) {
      for (let k = j + 1; k < numbers.length; ++k) {
        if (i !== j && j !== k && numbers[i] + numbers[j] + numbers[k] === 2020) {
          return numbers[i] * numbers[j] * numbers[k]
        }
      }
    }
  }
}

console.log(getProduct())
