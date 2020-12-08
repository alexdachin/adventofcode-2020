import input from './input'

export type Instruction = {
  opcode: 'acc' | 'jmp' | 'nop'
  value: number
}

const instructions: Instruction[] = input
  .split('\n')
  .map(instruction => {
    const [opcode, value] = instruction.split(' ')
    return {
      opcode: opcode as Instruction['opcode'],
      value: parseInt(value, 10),
    }
  })

export default instructions
