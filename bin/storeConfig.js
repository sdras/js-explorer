import chalk from 'chalk'
import inquirer from 'inquirer'
import { store } from './store.js'

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

    if (answers.namedConfig === true) {
    console.log(`\nGreat! This is now stored.
You can access it anytime by running ` + chalk.magenta('lookup ' + answers.namedConfig) + '\n')
    }
  })
}