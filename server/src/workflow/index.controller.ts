import { Put, JsonController, BodyParam, Get, Param } from 'routing-controllers'
import createWorkflow from './createWorkflow'
import { getWorkflowById, getWorkflows } from './getWorkflow';
import { SuccessReturn } from '~server/types/http/BaseReturn';

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

  @Get('/:id')
  async getWorkflowById(@Param('id') id: number) {
    return new SuccessReturn((await getWorkflowById(id)));

  }
}

export default WorkflowController
