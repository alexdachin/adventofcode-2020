import input from './input'

const map = input
  .split('\n')
  .map(row => row.split(''))

const height = map.length
const width = map[0].length

let current = { x: 0, y: 0 }
const trees = [0, 0, 0, 0, 0]
const slopes = [
  { right: 1, down: 1 },
  { right: 3, down: 1 },
  { right: 5, down: 1 },
  { right: 7, down: 1 },
  { right: 1, down: 2 },
]

for (const i in slopes) {
  const slope = slopes[i]

  while (current.x < height - 1) {
    current.x += slope.down
    current.y += slope.right
    current.y %= width

    if (map[current.x][current.y] === '#') {
      ++trees[i]
    }
  }

  current = { x: 0, y: 0 }
}

console.log(trees.reduce((product, current) => product * current, 1))
