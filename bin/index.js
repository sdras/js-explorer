#!/usr/bin/env node

'use strict'
import inquirer from 'inquirer'

import { greeting } from './greeting.js'
import { questions } from './questions.js'
import { findFinalAnswer } from './findFinalAnswer.js'
import { logFinalAnswer } from './logFinalAnswer.js'
const log = console.log

greeting()

inquirer.prompt(questions).then((answers) => {
  let finalAnswer = findFinalAnswer(answers)
})
