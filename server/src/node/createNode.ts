import { type Model } from 'sequelize'
import { HttpError } from 'routing-controllers'
import { getPlugins } from '~server/utils/cachePlugins'
import { type NodeData } from '~server/types/http/NodeDatas'
import { Node, Workflow } from '~server/database'

export class NoSearchPluginError extends HttpError {
  constructor(message: string) {
    super(500, message)
  }
}
export class NoSearchWorkflowError extends HttpError {
  constructor(message: string) {
    super(500, message)
  }
}
export class NeedParentNodeError extends HttpError {
  constructor(message: string) {
    super(500, message)
  }
}

function getActors() {
  return getPlugins().filter((plugin: any) => plugin.action === 'actuator')
}

async function updateNodeIdCaches(workflowId: number) {
  const nodes = await Node.findAll({ where: { workflowId }, order: [['nodeId', 'ASC']] })
  const nodeIds = nodes.map((node: any) => node.dataValues.nodeId)
  const nodeIdsString = nodeIds.join(',')
  await Workflow.update({ nodesIdCache: nodeIdsString }, { where: { workflowId } })
}

async function createNode(nodeData: NodeData) {
  const actors = getActors()
  const actor = actors.find((actor: any) => actor.name === nodeData.type)
  if (actor == null) {
    throw new NoSearchPluginError(`No actor plugin found for type ${nodeData.type}`)
  }
  const workflow = await Workflow.findByPk(nodeData.workflowId)
  if (workflow == null) {
    throw new NoSearchWorkflowError(`No workflow found for id ${nodeData.workflowId}`)
  }
  if (
    nodeData.parentNodeId == null &&
    (await Node.count({ where: { workflowId: nodeData.workflowId } })) !== 0
  ) {
    throw new NeedParentNodeError('Becauseof is not first Node, So Need parent node')
  }
  let parentNode: Model | null = null
  if (nodeData.parentNodeId != null) {
    parentNode = await Node.findByPk(nodeData.parentNodeId)
    if (parentNode == null || parentNode.dataValues.workflowId !== nodeData.workflowId) {
      throw new NeedParentNodeError('Parent node not found')
    }
    if (parentNode.dataValues.nextNodeId != null) {
      throw new NeedParentNodeError('Parent node already has next node')
    }
  }

  const node = await Node.create({
    nodeName: nodeData.name,
    nodeType: nodeData.type,
    workflowId: nodeData.workflowId,
    nodeConfig: nodeData.nodeConfig,
    parentNodeId: nodeData.parentNodeId,
  })

  if (parentNode != null) {
    await parentNode.update({ nextNodeId: node.dataValues.nodeId })
  }

  await updateNodeIdCaches(nodeData.workflowId)

  return node.dataValues
}

export default createNode
