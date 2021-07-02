#!/usr/bin/env node

'use strict'
import inquirer from 'inquirer'

import { arr } from './arrayMethod.js'
import { obj } from './objectMethod.js'
import { greeting } from './greeting.js'
import { questions } from './questions.js'
import { findFinalAnswer } from './findFinalAnswer.js'
import { logFinalAnswer } from './logFinalAnswer.js'

// initial greeting box
greeting()

// kick off inquirer with the questions array
inquirer.prompt(questions).then((answers) => {
  // gather information about the final answer
  const finalAnswer =
    answers.structure === 'array'
      ? findFinalAnswer(answers, arr)
      : findFinalAnswer(answers, obj)

  // log the final answer
  logFinalAnswer(finalAnswer)
})
