import chalk from 'chalk'
import boxen from 'boxen'
import figures from 'figures'
import hyperlinker from 'hyperlinker'
import supportsHyperlinks from 'supports-hyperlinks'

export function logFinalAnswer(finalAnswer) {
  log(chalk.yellowBright.bold.underline(`\nArray.${finalAnswer.name}()`))
  log(chalk.yellow(finalAnswer.desc + '\n'))

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
      chalk.blue.bold(
        hyperlinker(`\nsee the docs ${figures.arrowRight} `) + `${mozLink}\n`
      )
    )
  } else {
    log(chalk.blue.bold(`\ndocs link ${figures.arrowRight} `) + `${mozLink}\n`)
  }
}
