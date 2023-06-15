import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
  Comment,
  DataType,
  AllowNull,
  HasMany
} from 'sequelize-typescript'
import Node from './Node'

@Table({
  timestamps: true
})
class Workflow extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare workflowId: number

  @AllowNull(false)
  @Column(DataType.STRING(255))
  declare name: string

  @Column(DataType.STRING(255))
  declare description?: string

  @Column({
    type: DataType.ENUM,
    values: ['active', 'inactive'],
    defaultValue: 'active'
  })
  declare status: 'active' | 'inactive'

  @Column(DataType.INTEGER)
  declare triggerId: number

  @Comment('JSON string of array of node ids')
  @Column(DataType.STRING(255))
  nodesIdCache?: string

  @HasMany(() => Node, 'workflowId')
  nodes?: Node[]
}

export default Workflow
