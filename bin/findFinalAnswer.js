import { arr } from './arrayMethod.js'
import { obj } from './objectMethod.js'

//find the rest of the values based on the last response
//we will have a value in that object, but we need to access the others to display
function nestedAnswer(type, dataStructure, answers) {
  let answerArr = Object.keys(answers)
  let lastProp = answerArr[answerArr.length - 1]
  let lastValue = type ? dataStructure[type][lastProp] : dataStructure[lastProp]
  let finalIndex = lastValue.map((o) => o.shortDesc).indexOf(answers[lastProp])

  let finalAnswer = type
    ? dataStructure[type][lastProp][finalIndex]
    : dataStructure[lastProp][finalIndex]

  finalAnswer.structure = answers.structure
  return finalAnswer
}

export function findFinalAnswer(answers) {
  let answerProps = Object.keys(answers)
  let answerValues = Object.values(answers)

  // find in array and infoProp in object are both deeply nested
  if (answerProps.includes('find')) {
    return nestedAnswer('find', arr, answers)
  } else if (answerProps.includes('infoProp')) {
    return nestedAnswer('infoProp', obj, answers)
  // otherwise, just figure out if it's an array or object
  } else if (answerValues.includes('array')) {
    return nestedAnswer(null, arr, answers)
  } else {
    return nestedAnswer(null, obj, answers)
  }
}
