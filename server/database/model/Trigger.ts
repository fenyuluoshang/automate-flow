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
  triggerId!: number

  @ForeignKey(() => Workflow)
  @Column(DataType.INTEGER)
  workflowId!: number

  @BelongsTo(() => Workflow, 'workflowId')
  workflow?: Workflow

  @Column({
    type: DataType.UUIDV4,
    defaultValue: DataType.UUIDV4
  })
  triggerUUID!: string
}

export default Trigger
