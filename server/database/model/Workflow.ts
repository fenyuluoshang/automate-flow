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
  status: DataTypes.STRING,
  triggerId: DataTypes.INTEGER,
}, {
  timestamps: true
})

export default Workflow
