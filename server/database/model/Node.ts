import { DataTypes } from "sequelize";
import sequelize from "..";
import Workflow from "./Workflow";


const Node = sequelize.define('node', {
  nodeId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  workflowId: {
    type: DataTypes.INTEGER,
  },
  nodeName: DataTypes.STRING,
  nodeType: DataTypes.STRING,
  nodeParams: DataTypes.JSON,
})

Node.belongsTo(Workflow, {
  foreignKey: 'workflowId',
})

export default Node
