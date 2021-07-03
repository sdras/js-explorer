import fs from 'fs'
import inquirer from 'inquirer'
import Configstore from 'configstore';
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const log = console.log
const config = new Configstore(packageJson.name, {foo: 'bar'})

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
    default: 'That one that I keep forgetting',
    when(answers) {
      return answers.confirmStore === true
    },
  },
]

export const storeConfig = (finalAnswer) => {
  inquirer.prompt(configQuestion).then((answers) => {
    log(answers)
    config.set(answers.namedConfig, finalAnswer)

    log(config.get('foo'))
    log(config.get('idea'))
  })
}