import allJolts from './all-jolts'

const device = allJolts[allJolts.length - 1]

const cache: Record<number, number> = {}
const waysToGet = (currentJolts: number) => {
  if (currentJolts in cache) {
    return cache[currentJolts]
  }

  if (currentJolts === device) {
    cache[currentJolts] = 1
    return 1
  }

  const nextPossibleJolts = allJolts
    .filter(nextJolts => nextJolts > currentJolts && nextJolts - currentJolts <= 3)

  cache[currentJolts] = nextPossibleJolts
    .reduce((acc, nextJolts): number => acc + waysToGet(nextJolts), 0)

  return cache[currentJolts]
}

console.log(waysToGet(allJolts[0]))
