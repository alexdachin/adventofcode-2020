import input from './input'

const map = input
  .split('\n')
  .map(row => row.split(''))

const height = map.length
const width = map[0].length

const current = { x: 0, y: 0 }
let trees = 0

while (current.x < height - 1) {
  current.x += 1
  current.y += 3
  current.y %= width

  if (map[current.x][current.y] === '#') {
    ++trees
  }
}

console.log(trees)
