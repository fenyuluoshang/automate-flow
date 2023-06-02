import { Put, JsonController, BodyParam } from 'routing-controllers'
import { SuccessReturn } from '../../types/http/BaseReturn';
import createWorkflow from './createWorkflow'

@JsonController('/workflow')
class WorkflowController {
  @Put('/')
  async createWorkflow(
    @BodyParam('name', { required: true }) name: string,
    @BodyParam('description') description?: string
  ) {
    return new SuccessReturn(await createWorkflow(name, description));
  }
}

export default WorkflowController
