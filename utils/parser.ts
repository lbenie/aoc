import { readFileSync } from 'fs'

export const parser = (path: string) =>
  readFileSync(path, 'utf-8').replace(/\r/g, '').split('\n')
