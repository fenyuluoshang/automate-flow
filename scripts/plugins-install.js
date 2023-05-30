const path = require('path')
const fs = require('fs')
const execSh = require('exec-sh')
const colors = require('colors')

const SCRIPTNAME = colors.blue('[AUTOMATE_PLUGIN POST INSTALL]')

console.log(`${SCRIPTNAME} Installing plugins...`)

const PLUGIN_DIR = path.resolve(__dirname, '../plugins')

const allPlugins = []

/**
 * Find plugins in dir
 *
 * @param {string} dirname
 */
function deepDir(dirname) {
  let pluginInfo = {}
  if (fs.existsSync(`${dirname}/setup.json`)) {
    pluginInfo = JSON.parse(fs.readFileSync(`${dirname}/setup.json`))
  }
  if (fs.existsSync(`${dirname}/setup.yml`)) {
    pluginInfo = require('yaml').parse(fs.readFileSync(`${dirname}/setup.yml`, 'utf8'))
  }

  if (fs.existsSync(`${dirname}/package.json`)) {
    execSh('pnpm install', { cwd: dirname })
  }

  const files = fs.readdirSync(dirname)

  files.forEach((file) => {
    if (fs.statSync(`${dirname}/${file}`).isDirectory()) {
      deepDir(`${dirname}/${file}`)
    }
  })

  if (pluginInfo.name) {
    allPlugins.push(pluginInfo)
  }
}

if (!fs.existsSync(PLUGIN_DIR)) {
  fs.mkdirSync(PLUGIN_DIR)
}

deepDir(PLUGIN_DIR)

console.log(
  `${SCRIPTNAME} Plugin list: ${allPlugins.map((item) => item.name).join(', ')}`
)

fs.writeFileSync(path.resolve(__dirname, '../plugins.json'), JSON.stringify(allPlugins, null, 2))
