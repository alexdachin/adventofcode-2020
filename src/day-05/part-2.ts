import seatIds from './seat-ids'

const previousSeat = seatIds.find(id => !seatIds.includes(id + 1) && seatIds.includes(id + 2))

if (previousSeat) {
  console.log(previousSeat + 1)
}
