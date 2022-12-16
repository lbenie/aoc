import { getInput } from '../../utils'

const data = getInput(__dirname).filter((x) => x !== '')

const priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

const getOccurrence = () => {
  const occurrence: string[] = []

  for (const input of data) {
    const midPoint = input.length / 2
    const first = input.substring(0, midPoint).split('')
    const second = input.substring(midPoint).split('')

    for (const letter of first) {
      if (second.includes(letter)) {
        occurrence.push(letter)
        break
      }
    }
  }

  return occurrence
}

const getSum = (letters: readonly string[]) =>
  letters.reduce((acc, letter) => acc + priorities.indexOf(letter) + 1, 0)

const rearrange = () => getSum(getOccurrence())

console.log(rearrange())
