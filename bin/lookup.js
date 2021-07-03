#!/usr/bin/env node

'use strict'
import chalk from 'chalk'
import minimist from 'minimist'

import { store } from './store.js'
import { logFinalAnswer } from './logFinalAnswer.js'

// gather the name as argument parameters and turn it into a string
const [ node, file, ...args ] = process.argv;
const argv = minimist(args);
let finalArgv = argv._.join(" ")

// look up the answer in the store
if (store.get(finalArgv)) {
  logFinalAnswer(store.get(finalArgv))
} else {
  console.log(chalk.redBright(`\nSorry!`) + `
We can't quite find what you're looking for.
Perhaps run ${chalk.cyanBright('jsexplorer')} again and make sure you've stored it appropriately?

You can also look up commands by typing ${chalk.cyanBright('man explorer')}\n`)
}


