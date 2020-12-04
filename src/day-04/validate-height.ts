const validateHeight = (value: string): string => {
  const valueParts = value.split(/cm|in/)

  if (valueParts.length !== 2 || valueParts[1] !== '') {
    throw new Error('Incorrect format')
  }

  const valueNumber = parseInt(valueParts[0])

  if (value.endsWith('cm') && (valueNumber < 150 || valueNumber > 193)) {
    throw new Error('cm value not in range')
  }

  if (value.endsWith('in') && (valueNumber < 59 || valueNumber > 76)) {
    throw new Error('in value not in range')
  }

  return value
}

export default validateHeight
