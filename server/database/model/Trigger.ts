import { DataTypes } from 'sequelize'
import sequelize from '../connection'
import Workflow from './Workflow'

const Trigger = sequelize.define('trigger', {
  triggerId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  workflowId: {
    type: DataTypes.INTEGER
  },
  triggerUUID: {
    type: DataTypes.UUIDV4,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
  }
})

Trigger.belongsTo(Workflow, { foreignKey: 'workflowId' })

export default Trigger