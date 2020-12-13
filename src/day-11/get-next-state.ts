import getAdjacentOccupied from './get-adjacent-occupied'
import getVisibleOccupied from './get-visible-occupied'
import { Position, Mode, State } from './types'

const getNextPosition = (state: State, mode: Mode, i: number, j: number): Position => {
  if (state[i][j] === '.') {
    return '.'
  }

  const occupied = mode === 'adjacent'
    ? getAdjacentOccupied(state, i, j)
    : getVisibleOccupied(state, i, j)

  if (state[i][j] === 'L' && occupied === 0) {
    return '#'
  }

  if (state[i][j] === '#' && mode === 'adjacent' && occupied >= 4) {
    return 'L'
  }

  if (state[i][j] === '#' && mode === 'visible' && occupied >= 5) {
    return 'L'
  }

  return state[i][j]
}

const getNextState = (state: State, mode: Mode): State => {
  const newState: State = JSON.parse(JSON.stringify(state))
  for (const i in newState) {
    for (const j in newState[i]) {
      newState[i][j] = getNextPosition(state, mode, parseInt(i), parseInt(j))
    }
  }

  return newState
}

export default getNextState
