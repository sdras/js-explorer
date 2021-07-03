#!/usr/bin/env node

'use strict'
import chalk from 'chalk'
import figures from 'figures'
import inquirer from 'inquirer'
import { store } from './store.js'

const clearQuestion = [
  {
    type: 'confirm',
    name: 'confirmDelete',
    message: 'Are you sure you want to delete all of your stored jsexplorer items?',
    default: true,
  }
]

inquirer.prompt(clearQuestion).then((answer) => {
  if (answer.confirmDelete === true) {
    store.clear()
  }

  console.log(chalk.cyan('\njsexplorer ' + figures.arrowRight) + ' entries all cleared!\n')
})