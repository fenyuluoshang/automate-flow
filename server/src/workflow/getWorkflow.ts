import { Workflow } from '../../database'

export async function getWorkflows() {
  return await Workflow.findAll()
}
