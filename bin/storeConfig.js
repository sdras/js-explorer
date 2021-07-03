import inquirer from 'inquirer'
import { store } from './store.js'
const log = console.log

const configQuestion = [
  {
    type: 'confirm',
    name: 'confirmStore',
    message: 'Would you like to store this entry for safekeeping?',
    default: false,
  },
  {
    type: 'input',
    name: 'namedConfig',
    message: "What do you want to name it?",
    default: "The one I always forget!",
    when(answers) {
      return answers.confirmStore === true
    },
  },
]

export const storeConfig = (finalAnswer) => {
  inquirer.prompt(configQuestion).then((answers) => {
    store.set(answers.namedConfig, finalAnswer)
  })
}