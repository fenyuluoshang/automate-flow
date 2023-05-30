
import { DataTypes } from "sequelize";
import sequelize from "../connection";

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING,
  role: DataTypes.INTEGER,
  password: DataTypes.STRING,
  email: DataTypes.STRING,
}, {
  timestamps: true
})

export default User
