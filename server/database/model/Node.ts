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
  nodeId!: number

  @ForeignKey(() => Workflow)
  @Column(DataType.INTEGER)
  workflowId!: number

  @BelongsTo(() => Workflow, 'workflowId')
  workflow?: Workflow

  @Column(DataType.STRING(100))
  nodeName?: string

  @AllowNull(false)
  @Column(DataType.STRING(100))
  nodeType!: string

  @Column(DataType.STRING(255))
  nodeParams?: string

  @Column(DataType.INTEGER)
  nextNodeId?: number

  @Column(DataType.INTEGER)
  parentNodeId?: number
}

export default Node
