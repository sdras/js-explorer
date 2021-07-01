#!/usr/bin/env node

'use strict'
import chalk from 'chalk'
import boxen from 'boxen'
import figures from 'figures'
import inquirer from 'inquirer'
import hyperlinker from 'hyperlinker'
import supportsHyperlinks from 'supports-hyperlinks'
import { greeting } from './greeting.js'
import { questions } from './questions.js'
import { findFinalAnswer } from './findFinalAnswer.js'
const log = console.log

greeting()

inquirer.prompt(questions).then((answers) => {
  let finalAnswer = findFinalAnswer(answers)
  log(chalk.yellowBright.bold(`\nArray.${finalAnswer.name}()`))
  log(chalk.yellow(finalAnswer.desc))

  const codeBox = {
    padding: 1,
    borderStyle: 'doubleSingle',
    borderColor: 'blackBright',
    backgroundColor: '#000000',
  }
  const code = `  let arr = [5, 1, 8];
  ${finalAnswer.output}`
  const codeOutput = boxen(code, codeBox)
  log(chalk.cyanBright(codeOutput))

  const mozLink = `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/${finalAnswer.name}`

  if (supportsHyperlinks.stdout) {
    log(
      chalk.magenta.bold(
        hyperlinker(`\nsee the docs ${figures.arrowRight} `) + `${mozLink}\n`
      )
    )
  } else {
    log(
      chalk.magenta.bold(`\ndocs link: ${figures.arrowRight} `) + `${mozLink}\n`
    )
  }
})
