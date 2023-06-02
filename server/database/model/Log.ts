import { DataTypes } from 'sequelize'
import sequelize from '../connection'
import Workflow from './Workflow'
import Node from './Node'

const Log = sequelize.define('log', {
  logId: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  nodeId: DataTypes.INTEGER,
  workflowId: DataTypes.INTEGER,
  status: {
    type: DataTypes.ENUM,
    values: ['success', 'error', 'pending']
  },
  message: DataTypes.STRING,
  result: DataTypes.STRING
})

Log.belongsTo(Workflow, {
  foreignKey: 'workflowId'
})

Log.belongsTo(Node, {
  foreignKey: 'nodeId'
})

export default Log
