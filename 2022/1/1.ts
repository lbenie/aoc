import { parser } from '../../utils'

import { resolve } from 'path'

const data = parser(resolve(__dirname, 'input.txt'))

const getMostCalories = () => {
  let max = 0
  let elfCalories = 0

  data.forEach((input) => {
    if (input === '') {
      max = Math.max(max, elfCalories)
      elfCalories = 0
    }
    elfCalories += Number(input)
  })

  return max
}

console.log(getMostCalories())
