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
let minW = 0
let maxW = 0

let activeGrid = new Map<string, boolean>()
initialGridSlice.forEach((row, x) => {
  initialGridSlice[x].forEach((column, y) => {
    activeGrid.set(`${x},${y},0,0`, initialGridSlice[x][y] === '#')
  })
})

const getNeighbourKeys = (x: number, y: number, z: number, w: number): string[] => {
  const keys: string[] = []
  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      for (let k = z - 1; k <= z + 1; k++) {
        for (let l = w - 1; l <= w + 1; l++) {
          if (i !== x || j !== y || k !== z || l !== w) {
            keys.push(`${i},${j},${k},${l}`)
          }
        }
      }
    }
  }

  return keys
}

for (let cycle = 1; cycle <= 6; cycle++) {
  minX--
  maxX++
  minY--
  maxY++
  minZ--
  maxZ++
  minW--
  maxW++

  const newActiveGrid = new Map<string, boolean>()
  for (let x = minX; x <= maxX; x++) {
    for (let y = minY; y <= maxY; y++) {
      for (let z = minZ; z <= maxZ; z++) {
        for (let w = minW; w <= maxW; w++) {
          const activeNeighbours = getNeighbourKeys(x, y, z, w)
            .map(key => activeGrid.get(key))
            .filter(n => n)
            .length

          if (activeGrid.get(`${x},${y},${z},${w}`)) {
            newActiveGrid.set(`${x},${y},${z},${w}`, activeNeighbours === 2 || activeNeighbours === 3)
          } else {
            newActiveGrid.set(`${x},${y},${z},${w}`, activeNeighbours === 3)
          }
        }
      }
    }
  }

  activeGrid = newActiveGrid
}

console.log([...activeGrid.values()].filter(active => active).length)
