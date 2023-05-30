import { DataTypes } from "sequelize";
import sequelize from "../connection";
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
  nextNodeId: DataTypes.INTEGER,
  leftNodeId: DataTypes.INTEGER,
})

Node.belongsTo(Workflow, {
  foreignKey: 'workflowId',
})

export default Node
