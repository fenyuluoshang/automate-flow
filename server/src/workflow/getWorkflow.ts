import { Node, Workflow } from '~server/database'

export async function getWorkflows() {
  return (await Workflow.findAll()).map((item) => item.dataValues)
}

export async function getWorkflowById(id: number) {
  return await Workflow.findByPk(id, { include: [Node] })
}
