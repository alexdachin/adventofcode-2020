import input from './input'

type Instruction = {
  action: 'N' | 'S' | 'E' | 'W' | 'L' | 'R' | 'F'
  value: number
}

const instructions: Instruction[] = input
  .split('\n')
  .map((line: string): Instruction => ({
    action: line[0] as Instruction['action'],
    value: parseInt(line.slice(1)),
  }))

export default instructions
