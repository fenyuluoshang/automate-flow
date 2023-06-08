import path from 'path'
import { Sequelize } from 'sequelize-typescript'

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.resolve(__dirname, '../../running', 'database.sqlite'),
  models: [path.resolve(__dirname, './model') + '/*.ts'],
  logging: process.env.NODE_ENV === 'development'
})

export default sequelize
