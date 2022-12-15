import { getInput } from '../../utils'

const data = getInput(__dirname).filter((x) => x !== '')

const player1 = ['A', 'B', 'C'] as const
type Player1 = typeof player1[number]

const player2 = ['X', 'Y', 'Z'] as const
type Player2 = typeof player2[number]

const getScore = (player1: Player1, player2: Player2) => {
  let winScore = 0

  switch (player2) {
    case 'X':
      winScore = 0
      break

    case 'Y':
      winScore = 3
      break

    case 'Z':
      winScore = 6
      break
  }

  return getPlayerScore(player1, winScore) + winScore
}

const getPlayerScore = (player1: Player1, winScore: number) => {
  switch (player1) {
    case 'A':
      switch (winScore) {
        case 0:
          return 3
        case 3:
          return 1
        case 6:
          return 2
      }
      break
    case 'B':
      switch (winScore) {
        case 0:
          return 1
        case 3:
          return 2
        case 6:
          return 3
      }
      break
    case 'C':
      switch (winScore) {
        case 0:
          return 2
        case 3:
          return 3
        case 6:
          return 1
      }
      break
  }

  return 0
}

const getMatchScores = () =>
  data.reduce((acc, match) => {
    const [elf, result] = match.split(' ') as [Player1, Player2]
    return acc + getScore(elf, result)
  }, 0)

console.log(getMatchScores())
