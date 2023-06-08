import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, DataType, BelongsTo } from 'sequelize-typescript';
import Workflow from './Workflow'

@Table({
  timestamps: true
})
class Log extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  logId!: number;

  @ForeignKey(() => Workflow)
  @Column(DataType.INTEGER)
  workflowId!: number;

  @BelongsTo(() => Workflow, 'workflowId')
  workflow?: Workflow

  @Column({
    type: DataType.ENUM,
    values: ['success', 'error', 'pending']
  })
  status?: 'success' | 'error' | 'pending'
}

export default Log
