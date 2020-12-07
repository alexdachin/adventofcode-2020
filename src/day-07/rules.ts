import input from './input'

type Rules = Record<string, Record<string, number>>

const rules: Rules = input
  .split('\n')
  .map(rule => {
    const [outsideColor, inside] = rule.split(' bags contain ')
    const insideColors = inside
      .replace('.', '')
      .replace(/ bags?/g, '')
      .split(', ')
      .reduce((acc, colorWithQuantity) => {
        if (colorWithQuantity === 'no other') {
          return { ...acc }
        }

        const [quantity, ...colorWords] = colorWithQuantity.split(' ')
        const color = colorWords.join(' ')
        return { ...acc, [color]: parseInt(quantity) }
      }, {})

    return { outsideColor, insideColors }
  })
  .reduce((acc, rule) => ({
    ...acc,
    [rule.outsideColor]: rule.insideColors,
  }), {})

export default rules
