import { DataTypes } from 'sequelize'
import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
  Comment,
  DataType,
  AllowNull
} from 'sequelize-typescript'

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
    type: DataTypes.ENUM,
    values: ['active', 'inactive'],
    defaultValue: 'active'
  })
  declare status: 'active' | 'inactive'

  @Column(DataType.INTEGER)
  declare triggerId: number

  @Comment('JSON string of array of node ids')
  @Column(DataType.STRING(255))
  nodesIdCache?: string
}

export default Workflow
