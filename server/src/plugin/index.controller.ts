import { Get, JsonController } from 'routing-controllers'
import { getPlugins } from '../../utils/cachePlugins'

@JsonController('/plugins')
class PluginController {
  @Get('/')
  async getPlugins() {
    return getPlugins()
  }
}

export default PluginController
