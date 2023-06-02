import { Put, JsonController, BodyParam, Get } from 'routing-controllers'
import { SuccessReturn } from '../../types/http/BaseReturn';
import createWorkflow from './createWorkflow'
import { getWorkflows } from './getWorkflow';

@JsonController('/workflow')
class WorkflowController {
  @Put('/')
  async createWorkflow(
    @BodyParam('name', { required: true }) name: string,
    @BodyParam('description') description?: string
  ) {
    return new SuccessReturn((await createWorkflow(name, description)).dataValues);
  }

  @Get('/')
  async getWorkflows() {
    return new SuccessReturn(await getWorkflows());
  }
}

export default WorkflowController
