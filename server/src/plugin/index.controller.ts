import { Get, JsonController } from 'routing-controllers'
import { SuccessReturn } from '~server/types/http/BaseReturn';
import { getPlugins } from '~server/utils/cachePlugins'

@JsonController('/plugins')
class PluginController {
  @Get('/')
  async getPlugins() {
    return  new SuccessReturn(getPlugins())
  }
}

export default PluginController
