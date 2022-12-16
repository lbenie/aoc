import { getInput } from '../../utils'

const data = getInput(__dirname).filter((x) => x !== '')

type Pair = `${number}-${number}`

const getOverlap = (first: Pair, second: Pair) => {
  const [firstPairStart, firstPairEnd] = first.split('-').map((x) => Number(x))
  const [secondPairStart, secondPairEnd] = second
    .split('-')
    .map((x) => Number(x))

  return (
    (secondPairStart >= firstPairStart && secondPairEnd <= firstPairEnd) ||
    (firstPairStart >= secondPairStart && firstPairEnd <= secondPairEnd)
  )
}

const getOverlappingPairs = () =>
  data
    .reduce<readonly boolean[]>((acc, input) => {
      const [first, second] = input.split(',') as readonly Pair[]
      return [...acc, getOverlap(first, second)]
    }, [])
    .filter((x) => x).length

console.log(getOverlappingPairs())
