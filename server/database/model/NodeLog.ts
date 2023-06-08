import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  DataType,
  ForeignKey,
  Default,
  BelongsTo,
  Table
} from 'sequelize-typescript'
import Workflow from './Workflow'
import Node from './Node'
import Log from './Log'

@Table({
  timestamps: true
})
class NodeLog extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  nodeLogId!: number

  @Column(DataType.TEXT)
  configs!: string

  @ForeignKey(() => Workflow)
  @Column(DataType.INTEGER)
  workflowId!: number

  @BelongsTo(() => Workflow, 'workflowId')
  workflow?: Workflow

  @ForeignKey(() => Node)
  @Column(DataType.INTEGER)
  nodeId!: number

  @BelongsTo(() => Node, 'nodeId')
  node?: Node

  @ForeignKey(() => Log)
  @Column(DataType.INTEGER)
  logId!: number

  @BelongsTo(() => Log, 'logId')
  log?: Log

  @Default('pending')
  @Column({
    type: DataType.ENUM,
    values: ['success', 'error', 'pending']
  })
  status: 'success' | 'error' | 'pending' = 'pending'

  @Column(DataType.STRING(255))
  message?: string

  @Column(DataType.TEXT)
  result?: string
}

export default NodeLog
