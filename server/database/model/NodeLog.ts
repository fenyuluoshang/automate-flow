import { DataTypes } from 'sequelize'
import sequelize from '../connection'
import Workflow from './Workflow'
import Node from './Node'
import Log from './Log'

const NodeLog = sequelize.define('node-log', {
  nodeLogId: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  configs: DataTypes.TEXT,
  workflowId: DataTypes.INTEGER,
  nodeId: DataTypes.INTEGER,
  logId: DataTypes.INTEGER,
  status: {
    type: DataTypes.ENUM,
    values: ['success', 'error', 'pending']
  },
  message: DataTypes.STRING,
  result: DataTypes.STRING
})

NodeLog.belongsTo(Workflow, {
  foreignKey: 'workflowId'
})

NodeLog.belongsTo(Node, {
  foreignKey: 'nodeId'
})

NodeLog.belongsTo(Log, {
  foreignKey: 'logId'
})

export default NodeLog
