import input from './input'

type Passport = Record<string, string>

const passports: Passport[] = input
  .split('\n\n')
  .map(passport => passport.split(/\s/g))
  .map(fields => fields.reduce((passport, field) => {
    const [key, value] = field.split(':')
    return { ...passport, [key]: value }
  }, {}))

const isValid = (passport: Passport): boolean => {
  const fields = Object.keys(passport)
  return fields.includes('byr') &&
    fields.includes('iyr') &&
    fields.includes('eyr') &&
    fields.includes('hgt') &&
    fields.includes('hcl') &&
    fields.includes('ecl') &&
    fields.includes('pid')
}

console.log(passports.filter(isValid).length)
