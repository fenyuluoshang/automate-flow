import path from "path";
import execSh from "exec-sh";

let plugins: any = {};

export function loadPlugins() {
  plugins = require('../../plugins.json');
}

export function installPlugins() {
  execSh('npm postinstall', { cwd: path.join(__dirname, '../../')});
}

export function getPlugins() {
  return plugins;
}
