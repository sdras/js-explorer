import { arr } from './arrayMethod.js'
import { obj } from './objectMethod.js'
const log = console.log

function nestedAnswer(type, dataStructure) {
  let lastValue = dataStructure[type][lastProp]
  let finalIndex = lastValue.map((o) => o.shortDesc).indexOf(answers[lastProp])

  log(`last prop: ${lastProp}`)
  log(`last value: ${JSON.stringify(lastValue, null, 2)}`)
  log(`final index: ${finalIndex}`)

  return dataStructure[type][lastProp][finalIndex]
}

export function findFinalAnswer(answers) {
  const answerArr = Object.keys(answers)
  const lastProp = answerArr[answerArr.length - 1]

  if (answerArr.includes('find')) {
    nestedAnswer('find', arr)
  } else if (answerArr.includes('infoProp')) {
    nestedAnswer('infoProp', obj)
  } else {
    let lastValue = arr[lastProp]
    let finalIndex = lastValue
      .map((o) => o.shortDesc)
      .indexOf(answers[lastProp])

    return arr[lastProp][finalIndex]
  }
}
