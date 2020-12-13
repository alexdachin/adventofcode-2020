import instructions from './instructions'

type Position = {
  north: number
  east: number
}

let orientation = 0
const position: Position = { north: 0, east: 0 }

instructions.forEach(instruction => {
  if (instruction.action === 'N') {
    position.north += instruction.value
  }

  if (instruction.action === 'S') {
    position.north -= instruction.value
  }

  if (instruction.action === 'E') {
    position.east += instruction.value
  }

  if (instruction.action === 'W') {
    position.east -= instruction.value
  }

  if (instruction.action === 'L') {
    orientation += instruction.value
    orientation %= 360
  }

  if (instruction.action === 'R') {
    orientation -= instruction.value
    orientation += 360
    orientation %= 360
  }

  if (instruction.action === 'F') {
    if (orientation === 0) position.east += instruction.value
    if (orientation === 90) position.north += instruction.value
    if (orientation === 180) position.east -= instruction.value
    if (orientation === 270) position.north -= instruction.value
  }
})

console.log(Math.abs(position.north) + Math.abs(position.east))
