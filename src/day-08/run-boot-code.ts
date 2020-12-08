import { Instruction } from './instructions'

type BootCodeOutput = {
  acc: number
  infiniteLoop: boolean
}

const runBootCode = (instructions: Instruction[]): BootCodeOutput => {
  const instructionsRan = new Set()

  let i = 0
  let acc = 0
  while (!instructionsRan.has(i) && i < instructions.length) {
    instructionsRan.add(i)
    const { opcode, value } = instructions[i]

    if (opcode === 'acc') {
      acc += value
      i++
    }

    if (opcode === 'jmp') {
      i += value
    }

    if (opcode === 'nop') {
      i++
    }
  }

  return {
    acc,
    infiniteLoop: i < instructions.length,
  }
}

export default runBootCode
