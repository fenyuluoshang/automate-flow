import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, DataType, BelongsTo } from 'sequelize-typescript';
import Workflow from './Workflow'

@Table({
  timestamps: true
})
class Log extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare logId: number;

  @ForeignKey(() => Workflow)
  @Column(DataType.INTEGER)
  declare workflowId: number;

  @BelongsTo(() => Workflow, 'workflowId')
  declare workflow: Workflow

  @Column({
    type: DataType.ENUM,
    values: ['success', 'error', 'pending']
  })
  declare status: 'success' | 'error' | 'pending'
}

export default Log
