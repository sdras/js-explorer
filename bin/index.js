#!/usr/bin/env node

'use strict'
import chalk from 'chalk'
import inquirer from 'inquirer'
import { greeting } from './greeting.js'
import { questions } from './questions.js'
import { findFinalAnswer } from './findFinalAnswer.js'
const log = console.log

greeting()

inquirer.prompt(questions).then((answers) => {
  let finalAnswer = findFinalAnswer(answers)

  log(chalk.blue.bold('\nFinal Answer:'))
  log(JSON.stringify(finalAnswer, null, '  '))
})
