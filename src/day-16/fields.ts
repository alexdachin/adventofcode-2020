import input from './input'

type Field = {
  name: string
  values: Set<number>
}

const fieldsRaw = input.split('\n\n')[0]

const fields: Field[] = fieldsRaw
  .split('\n')
  .map(line => {
    const result = line.match(/(([a-z]|\s)+): (\d+)-(\d+) or (\d+)-(\d+)/)
    const name = result?.[1] as string
    const min1 = parseInt(result?.[3] as string)
    const max1 = parseInt(result?.[4] as string)
    const min2 = parseInt(result?.[5] as string)
    const max2 = parseInt(result?.[6] as string)
    const values = new Set<number>()

    for (let i = min1; i <= max1; i++) {
      values.add(i)
    }

    for (let i = min2; i <= max2; i++) {
      values.add(i)
    }

    return { name, values }
  })

export const isValidFieldValue = (fieldValue: number): boolean =>
  fields.some(field => field.values.has(fieldValue))

export default fields
