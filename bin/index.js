#!/usr/bin/env node

'use strict'
import inquirer from 'inquirer'

import { greeting } from './greeting.js'
import { questions } from './questions.js'
import { findFinalAnswer } from './findFinalAnswer.js'
import { logFinalAnswer } from './logFinalAnswer.js'

greeting()

inquirer.prompt(questions).then((answers) => {
  console.log(answers)
  // const finalAnswer = findFinalAnswer(answers)
  // logFinalAnswer(finalAnswer)
})
