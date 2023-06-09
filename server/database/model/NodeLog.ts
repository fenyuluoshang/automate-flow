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
  declare nodeLogId: number

  @Column(DataType.TEXT)
  declare configs: string

  @ForeignKey(() => Workflow)
  @Column(DataType.INTEGER)
  declare workflowId: number

  @BelongsTo(() => Workflow, 'workflowId')
  declare workflow: Workflow

  @ForeignKey(() => Node)
  @Column(DataType.INTEGER)
  declare nodeId: number

  @BelongsTo(() => Node, 'nodeId')
  declare node: Node

  @ForeignKey(() => Log)
  @Column(DataType.INTEGER)
  declare logId: number

  @BelongsTo(() => Log, 'logId')
  declare log: Log

  @Default('pending')
  @Column({
    type: DataType.ENUM,
    values: ['success', 'error', 'pending']
  })
  declare status: 'success' | 'error' | 'pending'

  @Column(DataType.STRING(255))
  message?: string

  @Column(DataType.TEXT)
  result?: string
}

export default NodeLog
