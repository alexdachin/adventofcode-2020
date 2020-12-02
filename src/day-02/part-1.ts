import input from './input'

type Password = {
  password: string
  policy: {
    min: number
    max: number
    letter: string
  }
}

const passwords: Password[] = input
  .split('\n')
  .map(line => {
    const [policy, password] = line.split(': ')
    const [minMax, letter] = policy.split(' ')
    const [min, max] = minMax.split('-').map(n => parseInt(n))
    return {
      password,
      policy: { min, max, letter },
    }
  })

const isValid = (password: Password): boolean => {
  const count = password.password
    .split('')
    .filter(letter => password.policy.letter === letter)
    .length

  return count >= password.policy.min && count <= password.policy.max
}

console.log(passwords.filter(isValid).length)
