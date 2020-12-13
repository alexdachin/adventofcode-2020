import { State } from './types'

const getAdjacentOccupied = (state: State, i: number, j: number): number => {
  const adjacent = [
    state?.[i - 1]?.[j],
    state?.[i - 1]?.[j - 1],
    state?.[i - 1]?.[j + 1],
    state?.[i]?.[j - 1],
    state?.[i]?.[j + 1],
    state?.[i + 1]?.[j],
    state?.[i + 1]?.[j - 1],
    state?.[i + 1]?.[j + 1],
  ]

  return adjacent.filter(seat => seat === '#').length
}

export default getAdjacentOccupied
