import { getInput } from '../../utils'

const data = getInput(__dirname).filter((x) => x !== '')

const player1 = ['A', 'B', 'C'] as const
type Player1 = typeof player1[number]

const player2 = ['X', 'Y', 'Z'] as const
type Player2 = typeof player2[number]

const getScore = (player1: Player1, player2: Player2) => {
  let winScore = 0

  switch (player1) {
    case 'A':
      switch (player2) {
        case 'X':
          winScore = 3
          break

        case 'Y':
          winScore = 6
          break

        case 'Z':
          winScore = 0
          break
      }
      break

    case 'B':
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
      break

    case 'C':
      switch (player2) {
        case 'X':
          winScore = 6
          break

        case 'Y':
          winScore = 0
          break

        case 'Z':
          winScore = 3
          break
      }
      break
  }

  return winScore + getPlayerScore(player2)
}

const getPlayerScore = (player: Player2) => {
  switch (player) {
    case 'X':
      return 1

    case 'Y':
      return 2

    case 'Z':
      return 3
  }
}

const getMatchScores = () =>
  data.reduce((acc, match) => {
    const [elf, player] = match.split(' ') as [Player1, Player2]
    return acc + getScore(elf, player)
  }, 0)

console.log(getMatchScores())
