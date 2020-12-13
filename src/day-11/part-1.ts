import formatState from './format-state'
import getNextState from './get-next-state'
import initialState from './initial-state'
import { State } from './types'

let previousState: State = initialState
let currentState: State = getNextState(previousState, 'adjacent')
while (formatState(previousState) !== formatState(currentState)) {
  previousState = currentState
  currentState = getNextState(currentState, 'adjacent')
}

console.log(currentState.flat().filter(seat => seat === '#').length)
