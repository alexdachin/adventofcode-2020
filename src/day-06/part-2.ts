import input from './input'

const groups = input
  .split('\n\n')
  .map(group => {
    const people = group
      .split('\n')
      .map(questions => questions.split(''))

    const didEveryoneAnswer = (question: string): boolean =>
      people.every(person => person.includes(question))

    return people[0].filter(question => didEveryoneAnswer(question))
  })

console.log(groups.reduce((sum, group) => sum + group.length, 0))
