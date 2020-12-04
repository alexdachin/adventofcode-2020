import * as Joi from 'joi'

import input from './input'
import validateHeight from './validate-height'

type Passport = Record<string, string>

const passportSchema = Joi.object({
  byr: Joi.number().min(1920).max(2002).required(),
  iyr: Joi.number().min(2010).max(2020).required(),
  eyr: Joi.number().min(2020).max(2030).required(),
  hgt: Joi.string().custom(validateHeight).required(),
  hcl: Joi.string().regex(/^#[a-f0-9]{6}$/).required(),
  ecl: Joi.string().valid('amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth').required(),
  pid: Joi.string().regex(/^[0-9]{9}$/).required(),
  cid: Joi.string(),
})

const passports: Passport[] = input
  .split('\n\n')
  .map(passport => passport.split(/\s/g))
  .map(fields => fields.reduce((passport, field) => {
    const [key, value] = field.split(':')
    return { ...passport, [key]: value }
  }, {}))

const isValid = (passport: Passport): boolean => {
  const { error } = passportSchema.validate(passport)
  return !error
}

console.log(passports.filter(isValid).length)
