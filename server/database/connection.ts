import { Sequelize } from 'sequelize'
import path from 'path'

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.resolve(__dirname, '../../running', 'database.sqlite')
})

export default sequelize
