import { State } from './types'

const formatState = (state: State): string => state
  .map(row => row.join(''))
  .join('\n')

export default formatState
