import { State } from './types'

const directions = [
  [-1, 0],
  [-1, -1],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, 0],
  [1, -1],
  [1, 1],
]

const getVisibleOccupied = (state: State, i: number, j: number): number => {
  const visibleSeats = directions.map(direction => {
    let newI = i
    let newJ = j
    let isFloor
    do {
      newI += direction[0]
      newJ += direction[1]
      isFloor = state?.[newI]?.[newJ] === '.'
    } while (isFloor)
    return state?.[newI]?.[newJ]
  })

  return visibleSeats.filter(seat => seat === '#').length
}

export default getVisibleOccupied
