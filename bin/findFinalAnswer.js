import { arr } from './arrayMethod.js'
import { obj } from './objectMethod.js'
const log = console.log

function nestedAnswer(type, dataStructure, answers) {
  let answerArr = Object.keys(answers)
  let lastProp = answerArr[answerArr.length - 1]
  let lastValue = dataStructure[type][lastProp]
  let finalIndex = lastValue.map((o) => o.shortDesc).indexOf(answers[lastProp])

  return dataStructure[type][lastProp][finalIndex]
}

export function findFinalAnswer(answers, dataStructure) {
  let answerArr = Object.keys(answers)
  let lastProp = answerArr[answerArr.length - 1]

  if (answerArr.includes('find')) {
    nestedAnswer('find', arr, answers)
  } else if (answerArr.includes('infoProp')) {
    nestedAnswer('infoProp', obj, answers)
  } else {
    let lastValue = dataStructure[lastProp]
    let finalIndex = lastValue
      .map((o) => o.shortDesc)
      .indexOf(answers[lastProp])

    return dataStructure[lastProp][finalIndex]
  }
}
