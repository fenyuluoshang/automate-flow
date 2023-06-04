import { Allow, IsNumber, IsObject, IsString, MinLength } from 'class-validator'

export class NodeData {

  @IsString()
  @MinLength(1)
  name: string

  @IsString()
  @MinLength(1)
  type: string

  @IsNumber()
  workflowId: number

  @Allow()
  parentNodeId?: number

  @IsObject()
  nodeConfig: Record<string, any>

  constructor(name: string, type: string, workflowId: number, nodeConfig: Record<string, any>, parentNodeId?: number) {
    this.name = name
    this.type = type
    this.workflowId = workflowId
    this.nodeConfig = nodeConfig
    this.parentNodeId = parentNodeId
  }
}

export class NodeDataWithId extends NodeData {

  @IsString()
  id: string

  constructor(id: string, name: string, type: string, workflowId: number, nodeConfig: Record<string, any>, parentNodeId?: number) {
    super(name, type, workflowId, nodeConfig, parentNodeId)
    this.id = id
  }
}
