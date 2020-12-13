import input from './input'

const adapters = input
  .split('\n')
  .map(adapter => parseInt(adapter))

const sortedAdapters = [...adapters].sort((a, b) => a - b)
const maxAdapterJolts = sortedAdapters[sortedAdapters.length - 1]
const allJolts = [0, ...sortedAdapters, maxAdapterJolts + 3]

export default allJolts
