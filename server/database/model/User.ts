import { AutoIncrement, Column, PrimaryKey, Table, Model, DataType } from 'sequelize-typescript'

@Table({
  timestamps: true
})
class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare userId: number

  @Column(DataType.STRING(100))
  declare name: string

  @Column(DataType.INTEGER)
  declare role: number

  @Column(DataType.STRING(100))
  declare password: string

  @Column(DataType.STRING(100))
  declare email: string
}

export default User
