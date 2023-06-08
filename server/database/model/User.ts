import { AutoIncrement, Column, PrimaryKey, Table, Model, DataType } from 'sequelize-typescript'

@Table({
  timestamps: true
})
class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  userId!: number

  @Column(DataType.STRING(100))
  name?: string

  @Column(DataType.INTEGER)
  role?: number

  @Column(DataType.STRING(100))
  password?: string

  @Column(DataType.STRING(100))
  email?: string
}

export default User
