import path from 'path'
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.resolve(__dirname, '../../running', 'database.sqlite'),
  logging: process.env.NODE_ENV === 'development',
})

export default sequelize
