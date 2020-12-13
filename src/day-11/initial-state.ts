import input from './input'
import { Position, State } from './types'

const initialState: State = input
  .split('\n')
  .map(row => row.split('') as Position[])

export default initialState
