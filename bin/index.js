#!/usr/bin/env node

'use strict'
import inquirer from 'inquirer'
import minimist from 'minimist'

import { arr } from './arrayMethod.js'
import { obj } from './objectMethod.js'
import { greeting } from './greeting.js'
import { questions } from './questions.js'
import { findFinalAnswer } from './findFinalAnswer.js'
import { logFinalAnswer } from './logFinalAnswer.js'
import { storeConfig } from './storeConfig.js'

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

  // see if there's an argument passed to show it plainly
  // if not, do the prompts to store it
  const [ node, file, ...args ] = process.argv;
  const argv = minimist(args, {
    alias: { p: 'plain' }
  });

  if (argv._.includes('plain') || argv.p === true) {
    return
  } else {
    // ask them if they want to store it in a config
    storeConfig(finalAnswer)
  }
})
