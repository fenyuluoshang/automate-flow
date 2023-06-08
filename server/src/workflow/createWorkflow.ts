import { Workflow } from '~server/database'

async function createWorkflow(name: string, description?: string) {
  const workflow = await Workflow.create({
    name,
    description,
    status: 'inactive'
  })

  workflow.dataValues.workflowId = workflow.workflowId

  return workflow
}

export default createWorkflow
