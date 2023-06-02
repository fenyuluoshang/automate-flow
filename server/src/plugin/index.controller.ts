import { Get, JsonController } from 'routing-controllers'
import { SuccessReturn } from '../../types/http/BaseReturn';
import { getPlugins } from '../../utils/cachePlugins'

@JsonController('/plugins')
class PluginController {
  @Get('/')
  async getPlugins() {
    return  new SuccessReturn(getPlugins())
  }
}

export default PluginController
