import { arr } from './arrayMethod.js'

export function findFinalAnswer(answers) {
  let answerArr = Object.keys(answers)
  if (answerArr.includes('find')) {
    console.log('this is a find array')
  } else {
    let lastProp = answerArr[answerArr.length - 1]
    console.log(`last prop: ${lastProp}`)

    let lastValue = arr[lastProp]
    console.log(`last value: ${JSON.stringify(lastValue, null, 2)}`)

    let finalIndex = lastValue
      .map((o) => o.shortDesc)
      .indexOf(answers[lastProp])
    console.log(`finalIndex: ${finalIndex}`)

    return arr[lastProp][finalIndex]
  }
}
