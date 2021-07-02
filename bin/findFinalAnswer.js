import { arr } from './arrayMethod.js'
import { obj } from './objectMethod.js'

function nestedAnswer(type, dataStructure, answers) {
  let answerArr = Object.keys(answers)
  let lastProp = answerArr[answerArr.length - 1]
  let lastValue = type ? dataStructure[type][lastProp] : dataStructure[lastProp]
  let finalIndex = lastValue.map((o) => o.shortDesc).indexOf(answers[lastProp])

  return type
    ? dataStructure[type][lastProp][finalIndex]
    : dataStructure[lastProp][finalIndex]
}

export function findFinalAnswer(answers) {
  let answerProps = Object.keys(answers)
  let answerValues = Object.values(answers)

  if (answerProps.includes('find')) {
    return nestedAnswer('find', arr, answers)
  } else if (answerProps.includes('infoProp')) {
    return nestedAnswer('infoProp', obj, answers)
  } else if (answerValues.includes('array')) {
    return nestedAnswer(null, arr, answers)
  } else {
    return nestedAnswer(null, obj, answers)
  }
}
