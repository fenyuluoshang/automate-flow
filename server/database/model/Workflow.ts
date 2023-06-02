import { DataTypes } from "sequelize";
import sequelize from "../connection";

const Workflow = sequelize.define('workflow', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  status: {
    type: DataTypes.ENUM,
    values: ['active', 'inactive']
  },
  triggerId: DataTypes.INTEGER,
  nodesIdCache: {
    type: DataTypes.TEXT,
    comment: "JSON string of array of node ids"
  }
}, {
  timestamps: true
})

export default Workflow
