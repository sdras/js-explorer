'use strict'
import chalk from 'chalk'
import boxen from 'boxen'
import figures from 'figures'
import wrapAnsi from 'wrap-ansi'
import indentString from 'indent-string'
const log = console.log

export const greeting = () => {
  const welcome =
    chalk.yellow(figures.star) +
    chalk.cyan(' Welcome to the JavaScript Explorer! ') +
    chalk.yellow(figures.star)
  const welcomeBox = {
    padding: 1,
    margin: 1,
    borderStyle: 'doubleSingle',
    borderColor: 'yellowBright',
    backgroundColor: '#000000',
  }
  const msgBox = boxen(welcome, welcomeBox)

  const subtitle = chalk.blueBright.italic(
    'Find the array method you need without digging through the docs\n'
  )
  const wrappedSubtitle = wrapAnsi(subtitle, 35)

  log(msgBox)
  log(indentString(wrappedSubtitle, 8))
}
