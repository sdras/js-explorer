#!/usr/bin/env node

'use strict'
import chalk from 'chalk'
import inquirer from 'inquirer'
import { greeting } from './greeting.js'
import { questions } from './questions.js'
const log = console.log

greeting()

inquirer.prompt(questions).then((answers) => {
  log(chalk.blue.bold('\nAnswers:'))
  log(JSON.stringify(answers, null, '  '))
})
