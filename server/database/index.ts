import sequelize from './connection'
export { default as sequelize } from './connection'
export { default as Workflow } from './model/Workflow'
export { default as Node } from './model/Node'
export { default as User } from './model/User'
export { default as Trigger } from './model/Trigger'

export async function initDB() {
  await sequelize.sync({ force: true })
}
