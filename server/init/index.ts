import { loadPlugins } from '../utils/cachePlugins'
import { initDB } from '../database/'
import User from '../database/model/User'

async function initUser() {
  if ((await User.count()) > 0) return
  await User.create({
    name: 'admin',
    role: 0
  })
}

async function init() {
  await initDB()
  await initUser()
  loadPlugins()
}

export default init
