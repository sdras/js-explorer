#!/usr/bin/env node

'use strict'
import inquirer from 'inquirer'

import { arr } from './arrayMethod.js'
import { obj } from './objectMethod.js'
import { greeting } from './greeting.js'
import { questions } from './questions.js'
import { findFinalAnswer } from './findFinalAnswer.js'
import { logFinalAnswer } from './logFinalAnswer.js'

let finalAnswer

greeting()

inquirer.prompt(questions).then((answers) => {
  finalAnswer =
    answers.structure === 'array'
      ? findFinalAnswer(answers, arr)
      : findFinalAnswer(answers, obj)

  logFinalAnswer(finalAnswer)
})
