import input from './input'

const initialGridSlice = input
  .split('\n')
  .map(line => line.split(''))

let minX = 0
let maxX = initialGridSlice.length
let minY = 0
let maxY = initialGridSlice[0].length
let minZ = 0
let maxZ = 0

let activeGrid = new Map<string, boolean>()
initialGridSlice.forEach((row, x) => {
  initialGridSlice[x].forEach((column, y) => {
    activeGrid.set(`${x},${y},0`, initialGridSlice[x][y] === '#')
  })
})

const getNeighbourKeys = (x: number, y: number, z: number): string[] => {
  const keys: string[] = []
  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      for (let k = z - 1; k <= z + 1; k++) {
        if (i !== x || j !== y || k !== z) {
          keys.push(`${i},${j},${k}`)
        }
      }
    }
  }

  return keys
}

for (let i = 1; i <= 6; i++) {
  minX--
  maxX++
  minY--
  maxY++
  minZ--
  maxZ++

  const newActiveGrid = new Map<string, boolean>()
  for (let x = minX; x <= maxX; x++) {
    for (let y = minY; y <= maxY; y++) {
      for (let z = minZ; z <= maxZ; z++) {
        const activeNeighbours = getNeighbourKeys(x, y, z)
          .map(key => activeGrid.get(key))
          .filter(n => n)
          .length

        if (activeGrid.get(`${x},${y},${z}`)) {
          newActiveGrid.set(`${x},${y},${z}`, activeNeighbours === 2 || activeNeighbours === 3)
        } else {
          newActiveGrid.set(`${x},${y},${z}`, activeNeighbours === 3)
        }
      }
    }
  }

  activeGrid = newActiveGrid
}

console.log([...activeGrid.values()].filter(active => active).length)
