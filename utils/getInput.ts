import { parser } from '.'

import { resolve } from 'path'

export const getInput = (path: string) => parser(resolve(path, 'input.txt'))
