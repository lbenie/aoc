import { parser } from '../../utils'

import { resolve } from 'path'

const data = parser(resolve(__dirname, 'input.txt'))

const getTop3Elves = () => {
  let index = 0
  let elfCalories = 0

  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  return data
    .reduce<number[]>((acc, input) => {
      if (input === '') {
        elfCalories = 0
        index++
        return acc
      }

      elfCalories += Number(input)
      acc[index] = elfCalories
      return acc
    }, [])
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((sum, value) => sum + value, 0)
}

console.log(getTop3Elves())
