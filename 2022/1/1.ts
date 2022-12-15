import { getInput } from '../../utils'

const data = getInput(__dirname)

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
