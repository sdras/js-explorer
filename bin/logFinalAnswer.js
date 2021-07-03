import chalk from 'chalk'
import boxen from 'boxen'
import figures from 'figures'
import wrapAnsi from 'wrap-ansi'
import hyperlinker from 'hyperlinker'
import supportsHyperlinks from 'supports-hyperlinks'
const log = console.log
const divider = `\n.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo.oOo`

export function logFinalAnswer(finalAnswer) {
  const initialCode = finalAnswer.structure === `array` ? 
  `let arr = [5, 1, 8];` : 
  `let obj = {
  a: 1,
  b: 2,
  c: 3
};`

  log(chalk.blackBright(divider))
  //title and description
  log(chalk.yellowBright.bold.underline(`\nArray.${finalAnswer.name}()`))
  log(wrapAnsi('\n' + finalAnswer.desc + '\n', 70))

  //create the box with the code example
  const codeBox = {
    padding: 1,
    borderStyle: 'doubleSingle',
    borderColor: 'blackBright',
    backgroundColor: '#000000',
  }
  const code =
    chalk.blackBright('Usage:\n') +
    chalk.cyanBright(`${initialCode}\n\n${finalAnswer.example}\n\n`) +
    chalk.blackBright('Output:\n') +
    chalk.cyan(finalAnswer.output)

  const codeOutput = boxen(code, codeBox)
  log(codeOutput)

  //docs link, displays differently based on terminal link support
  const mozLink = `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/${finalAnswer.name}`

  if (supportsHyperlinks.stdout) {
    log(
      chalk.yellow(
        hyperlinker(`\nsee the docs ${figures.arrowRight} `) + `${mozLink}\n`
      )
    )
  } else {
    log(
      chalk.blueBright(
        chalk.bold(`\ndocs link ${figures.arrowRight}\n`) + `${mozLink}\n`
      )
    )
  }
  log(chalk.blackBright(divider))
  log('\n')
}
