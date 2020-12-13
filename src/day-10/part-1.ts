import allJolts from './all-jolts'

const differences: number[] = allJolts.map((currentJolts, i) => {
  const previousJolts = allJolts[i - 1] ?? 0
  return currentJolts - previousJolts
})

const nOneJolt = differences.filter(d => d === 1).length
const nThreeJolts = differences.filter(d => d === 3).length

console.log(nOneJolt * nThreeJolts)
