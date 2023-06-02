import path from 'path'
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.resolve(__dirname, '../../running', 'database.sqlite')
})

export default sequelize
