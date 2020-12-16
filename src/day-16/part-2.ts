import fields, { isValidFieldValue } from './fields'
import input from './input'

const [, myTicketRaw, nearbyTicketsRaw] = input
  .replace('your ticket:\n', '')
  .replace('nearby tickets:\n', '')
  .split('\n\n')

const validNearbyTickets: number[][] = nearbyTicketsRaw
  .split('\n')
  .map(line => line.split(',').map(n => parseInt(n)))
  .filter(ticket => ticket.every(isValidFieldValue))

const myTicket = myTicketRaw.split(',').map(n => parseInt(n))

const isValidFieldOrderCache = new Map<string, boolean>()
const isValidFieldOrder = (fieldName: string, i: number) => {
  const cacheKey = `${fieldName},${i}`
  const cacheValue = isValidFieldOrderCache.get(cacheKey)
  if (cacheValue !== undefined) {
    return cacheValue
  }

  const field = fields.find(field => field.name === fieldName)
  if (!field) { throw new Error('Field not found.') }

  const result = validNearbyTickets.every(ticket => field.values.has(ticket[i]))
  isValidFieldOrderCache.set(cacheKey, result)

  return result
}

const getOrderPossibilities = (fieldNames: string[]): string[][] => {
  const lastFieldName = [...fieldNames].pop()
  if (lastFieldName && !isValidFieldOrder(lastFieldName, fieldNames.length - 1)) {
    return []
  }

  if (fieldNames.length === fields.length) {
    return [fieldNames]
  }

  const nextPossibleFieldNames = fields
    .filter(field => !fieldNames.includes(field.name))
    .map(field => field.name)

  return nextPossibleFieldNames.flatMap(
    nextPossibleFieldName => getOrderPossibilities([...fieldNames, nextPossibleFieldName]),
  )
}

const fieldOrder = getOrderPossibilities([]).pop()

if (!fieldOrder) { throw new Error('No field order found.') }

const indexes: number[] = fieldOrder
  .map((fieldName, i) => fieldName.startsWith('departure') ? i : null)
  .filter((i): i is number => i !== null)

console.log(indexes.reduce((acc, i) => acc * myTicket[i], 1))
