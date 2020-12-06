import input from './input'

const groups = input
  .split('\n\n')
  .map(group => new Set(group.replace(/\n/g, '').split('')))

console.log(groups.reduce((sum, group) => sum + group.size, 0))
