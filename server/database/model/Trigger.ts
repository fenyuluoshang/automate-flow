import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'
import Workflow from './Workflow'

@Table({
  timestamps: true
})
class Trigger extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare triggerId: number

  @ForeignKey(() => Workflow)
  @Column(DataType.INTEGER)
  declare workflowId: number

  @BelongsTo(() => Workflow, 'workflowId')
  declare workflow: Workflow

  @Column({
    type: DataType.UUIDV4,
    defaultValue: DataType.UUIDV4
  })
  declare triggerUUID: string
}

export default Trigger
