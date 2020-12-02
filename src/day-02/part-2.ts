import input from './input'

type Password = {
  password: string
  policy: {
    index1: number
    index2: number
    letter: string
  }
}

const passwords: Password[] = input
  .split('\n')
  .map(line => {
    const [policy, password] = line.split(': ')
    const [minMax, letter] = policy.split(' ')
    const [index1, index2] = minMax.split('-').map(n => parseInt(n))
    return {
      password,
      policy: { index1, index2, letter },
    }
  })

const isValid = (password: Password): boolean => {
  return (password.password[password.policy.index1 - 1] === password.policy.letter) !==
  (password.password[password.policy.index2 - 1] === password.policy.letter)
}

console.log(passwords.filter(isValid).length)
