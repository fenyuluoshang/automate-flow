import { DataTypes } from 'sequelize'
import sequelize from '../connection'
import Workflow from './Workflow'

const Log = sequelize.define('log', {
  logId: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  workflowId: DataTypes.INTEGER,
  status: {
    type: DataTypes.ENUM,
    values: ['success', 'error', 'pending']
  },
})

Log.belongsTo(Workflow, {
  foreignKey: 'workflowId'
})

export default Log
