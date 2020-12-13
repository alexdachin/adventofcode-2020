import allJolts from './all-jolts'

const device = allJolts[allJolts.length - 1]

const cache: Record<number, number> = {}
const waysToGet = (currentJolts: number) => {
  if (currentJolts in cache) {
    return cache[currentJolts]
  }

  if (currentJolts === device) {
    // full chain
    cache[currentJolts] = 1
    return 1
  }

  const possibleJolts = allJolts
    .filter(nextJolts => nextJolts > currentJolts && nextJolts - currentJolts <= 3)

  if (possibleJolts.length === 0) {
    // no further adapters fit
    cache[currentJolts] = 0
    return 0
  }

  cache[currentJolts] = possibleJolts
    .reduce((acc, nextJolts): number => acc + waysToGet(nextJolts), 0)

  return cache[currentJolts]
}

console.log(waysToGet(allJolts[0]))
