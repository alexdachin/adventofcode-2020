import formatState from './format-state'
import getNextState from './get-next-state'
import initialState from './initial-state'
import { State } from './types'

let previousState: State = initialState
let currentState: State = getNextState(previousState, 'visible')
while (formatState(previousState) !== formatState(currentState)) {
  previousState = currentState
  currentState = getNextState(currentState, 'visible')
}

console.log(currentState.flat().filter(seat => seat === '#').length)
