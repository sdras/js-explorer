import { arr } from './arrayMethod.js'
import { obj } from './objectMethod.js'

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
    message: `I'm trying to find `,
    choices: ['one item', 'one or many items'],
    when(answers) {
      return answers.arrayBasis === 'find items'
    },
  },
  {
    type: 'list',
    name: 'objBasis',
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
  {
    type: 'list',
    name: 'infoProp',
    message: 'I need to get ',
    choices: [
      'details about the property',
      'a list of all of the keys and/or values',
    ],
    when(answers) {
      return answers.objBasis === 'get information about properties'
    },
  },
]

function createAnswers(
  type,
  prompt,
  structInput = arr,
  answerBasis = 'arrayBasis'
) {
  questions.push({
    type: 'list',
    name: type,
    message: `I need to ${type}`,
    choices: structInput[type].map((item) => item.shortDesc),
    when(answers) {
      return answers[answerBasis] === prompt
    },
  })
}

const fullQuestions = () => {
  // arrays
  createAnswers('add', 'add items or other arrays')
  createAnswers('remove', 'remove items')
  createAnswers('iterate', 'walk over items')
  createAnswers('string', 'return a string')
  createAnswers('order', 'order an array')
  createAnswers('other', 'something else')
  //arrays with find, which is nested
  createAnswers('single', 'one item', arr.find, 'find')
  createAnswers('many', 'one or many items', arr.find, 'find')

  //objects
  createAnswers('createObj', 'create an object', obj, 'objBasis')
  createAnswers('createProp', 'create properties', obj, 'objBasis')
  createAnswers('infoObj', 'get information about an object', obj, 'objBasis')
  createAnswers('noChange', 'restrict changes to an object', obj, 'objBasis')
  createAnswers(
    'createString',
    'create a string from an object',
    obj,
    'objBasis'
  )
  createAnswers('prototype', 'manage prototypes', obj, 'objBasis')
  //objects with details, which is nested
  createAnswers(
    'details',
    'details about the property',
    obj.infoProp,
    'infoProp'
  )
  createAnswers(
    'list',
    'a list of all of the keys and/or values',
    obj.infoProp,
    'infoProp'
  )
}
fullQuestions()

export { questions }
