import { arr } from './arrayMethod.js'

const questions = [
  {
    type: 'list',
    name: 'structure',
    message: 'Is this for an array or an object?',
    choices: ['array', 'object'],
  },
  {
    type: 'list',
    name: 'arrayBasis',
    message: 'I have an array, I would like to...',
    choices: [
      'add items or other arrays',
      'remove items',
      'find items',
      'walk over items',
      'return a string',
      'order an array',
      'something else',
    ],
    when(answers) {
      return answers.structure === 'array'
    },
  },
  {
    type: 'list',
    name: 'find',
    message: `I'm trying to find`,
    choices: ['one item', 'one or many items'],
    when(answers) {
      return answers.structure === 'find'
    },
  },
  {
    type: 'list',
    name: 'objectBasis',
    message: 'I have an object, I would like to...',
    choices: [
      'create an object',
      'create properties',
      'get information about an object',
      'get information about properties',
      'restrict changes to an object',
      'create a string from an object',
      'manage prototypes',
    ],
    when(answers) {
      return answers.structure === 'object'
    },
  },
]

function createArrAnswers(type, prompt, arrayInput) {
  questions.push({
    type: 'list',
    name: type,
    message: `I need to ${type}`,
    choices: arrayInput[type].map((item) => item.shortDesc),
    when(answers) {
      return answers.arrayBasis === prompt
    },
  })
}

const fullQuestions = () => {
  createArrAnswers('add', 'add items or other arrays', arr)
  createArrAnswers('remove', 'remove items', arr)
  createArrAnswers('iterate', 'walk over items', arr)
  createArrAnswers('string', 'return a string', arr)
  createArrAnswers('order', 'order an array', arr)
  createArrAnswers('other', 'something else', arr)
  createArrAnswers('find', 'one item', arr['single'])
  createArrAnswers('find', 'one or many items', arr['many'])
}

fullQuestions()

export { questions }
