export const questions = [
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
