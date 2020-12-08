import instructions from './instructions'
import runBootCode from './run-boot-code'

const transformMap = {
  nop: 'jmp',
  jmp: 'nop',
} as const

for (const i in instructions) {
  const instruction = instructions[i]

  if (instruction.opcode in transformMap) {
    const newInstructions = [...instructions]
    newInstructions[i] = {
      ...newInstructions[i],
      opcode: transformMap[instruction.opcode as keyof typeof transformMap],
    }

    const output = runBootCode(newInstructions)
    if (output.infiniteLoop === false) {
      console.log(output.acc)
      break
    }
  }
}
