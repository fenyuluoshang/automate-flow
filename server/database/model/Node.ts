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
  nodeType: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "is the node actor name"
  },
  nodeParams: DataTypes.JSON,
  nextNodeId: DataTypes.INTEGER,
  leftNodeId: DataTypes.INTEGER,
})

Node.belongsTo(Workflow, {
  foreignKey: 'workflowId',
})

export default Node
