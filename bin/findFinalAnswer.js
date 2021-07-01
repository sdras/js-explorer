import { arr } from './arrayMethod.js'
const log = console.log

export function findFinalAnswer(answers) {
  const answerArr = Object.keys(answers)
  const lastProp = answerArr[answerArr.length - 1]

  if (answerArr.includes('find')) {
    let lastValue = arr.find[lastProp]
    let finalIndex = lastValue
      .map((o) => o.shortDesc)
      .indexOf(answers[lastProp])

    log(`last prop: ${lastProp}`)
    log(`last value: ${JSON.stringify(lastValue, null, 2)}`)
    log(`final index: ${finalIndex}`)

    return arr.find[lastProp][finalIndex]
  } else {
    let lastValue = arr[lastProp]
    let finalIndex = lastValue
      .map((o) => o.shortDesc)
      .indexOf(answers[lastProp])

    return arr[lastProp][finalIndex]
  }
}
