import instructions from './instructions'

type Position = {
  north: number
  east: number
}

const waypoint: Position = { north: 1, east: 10 }
const position: Position = { north: 0, east: 0 }

instructions.forEach(instruction => {
  if (instruction.action === 'N') {
    waypoint.north += instruction.value
  }

  if (instruction.action === 'S') {
    waypoint.north -= instruction.value
  }

  if (instruction.action === 'E') {
    waypoint.east += instruction.value
  }

  if (instruction.action === 'W') {
    waypoint.east -= instruction.value
  }

  if (instruction.action === 'L') {
    const rotations = instruction.value / 90
    for (let i = 0; i < rotations; i++) {
      const currentNorth = waypoint.north
      waypoint.north = waypoint.east
      waypoint.east = -currentNorth
    }
  }

  if (instruction.action === 'R') {
    const rotations = instruction.value / 90
    for (let i = 0; i < rotations; i++) {
      const currentNorth = waypoint.north
      waypoint.north = -waypoint.east
      waypoint.east = currentNorth
    }
  }

  if (instruction.action === 'F') {
    position.north += waypoint.north * instruction.value
    position.east += waypoint.east * instruction.value
  }
})

console.log(Math.abs(position.north) + Math.abs(position.east))
