import input from './input'

const toNumber = (binarySpacePartition: string) => {
  const binaryMap = {
    F: 0,
    B: 1,
    L: 0,
    R: 1,
  }

  const binaryNumber = binarySpacePartition
    .split('')
    .map(bit => binaryMap[bit as keyof typeof binaryMap])
    .join('')

  return parseInt(binaryNumber, 2)
}

export default input
  .split('\n')
  .map(seat => ({ row: toNumber(seat.substr(0, 7)), column: toNumber(seat.substr(7)) }))
  .map(seat => seat.row * 8 + seat.column)
