import sequelize from './connection'
export { default as sequelize } from './connection'
export { default as Workflow } from './model/Workflow'
export { default as Node } from './model/Node'
export { default as User } from './model/User'
export { default as Trigger } from './model/Trigger'
export { default as Log } from './model/Log'
export { default as NodeLog } from './model/NodeLog'

export async function initDB() {
  await sequelize.sync({ force: true })
}
