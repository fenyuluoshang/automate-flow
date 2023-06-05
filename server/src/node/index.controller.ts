import { Body, JsonController, Put } from 'routing-controllers'
import { NodeData } from '../../types/http/NodeDatas'
import { SuccessReturn } from '../../types/http/BaseReturn'
import createNode from './createNode'

@JsonController('/node')
class PluginController {
  @Put('/')
  async createNode(@Body({ validate: true }) node: NodeData) {
    return new SuccessReturn(await createNode(node))
  }
}

export default PluginController
