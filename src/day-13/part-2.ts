import { buses } from './input'

const isBusInOrder = (i: number, t: number): boolean =>
  isNaN(buses[i]) || (t + i) % buses[i] === 0

const areBusesInOrder = (t: number): boolean =>
  buses.every((bus, i) => isBusInOrder(i, t))

let t = buses[0]
let step = buses[0]
let iNextBus = 1

while (!areBusesInOrder(t)) {
  const nextBus = buses[iNextBus]

  if (isBusInOrder(iNextBus, t)) {
    step *= isNaN(nextBus) ? 1 : nextBus
    iNextBus++
  }

  t += step
}

console.log(t)
