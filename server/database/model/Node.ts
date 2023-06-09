import {
  AutoIncrement,
  ForeignKey,
  Column,
  Model,
  PrimaryKey,
  Table,
  BelongsTo,
  DataType,
  AllowNull
} from 'sequelize-typescript'
import Workflow from './Workflow'

@Table
class Node extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare nodeId: number

  @ForeignKey(() => Workflow)
  @Column(DataType.INTEGER)
  declare workflowId: number

  @BelongsTo(() => Workflow, 'workflowId')
  declare workflow: Workflow

  @Column(DataType.STRING(100))
  declare nodeName: string

  @AllowNull(false)
  @Column(DataType.STRING(100))
  declare nodeType: string

  @Column(DataType.STRING(255))
  declare nodeParams: string

  @Column(DataType.INTEGER)
  declare nextNodeId: number

  @Column(DataType.INTEGER)
  declare parentNodeId: number
}

export default Node
