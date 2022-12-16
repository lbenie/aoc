import { getInput } from '../../utils'

const data = getInput(__dirname).filter((x) => x !== '')

const priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

const getOccurrence = () => {
  const occurrence: string[] = []

  for (let i = 0; i < data.length; i += 3) {
    const first = data[i]
    const second = data[i + 1]
    const third = data[i + 2]

    for (const letter of first) {
      if (second.includes(letter) && third.includes(letter)) {
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
