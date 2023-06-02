import path from 'path'

export const DB_TYPE = global.DB_TYPE ?? process.env.DB_TYPE ?? 'sqlite'
export const DB_HOST =
  global.DB_HOST ??
  process.env.DB_HOST ??
  path.resolve(__dirname, '../../running', 'database.sqlite')
