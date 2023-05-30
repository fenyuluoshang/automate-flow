import { DataTypes } from "sequelize";
import sequelize from "..";

const Workflow = sequelize.define('workflow', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  status: DataTypes.STRING,
}, {
  timestamps: true
})

export default Workflow
