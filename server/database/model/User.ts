
import { DataTypes } from "sequelize";
import sequelize from "..";

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING,
  role: DataTypes.INTEGER
}, {
  timestamps: true
})

export default User
