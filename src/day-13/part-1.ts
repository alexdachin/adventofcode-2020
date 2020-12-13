import { minutes, buses } from './input'

const wait = buses.map(bus => isNaN(bus) ? NaN : bus - minutes % bus)
const indexMinWait = wait.findIndex(w => w === Math.min(...wait.filter(w => !isNaN(w))))

console.log(wait[indexMinWait] * buses[indexMinWait])
