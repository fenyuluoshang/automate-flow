import supertest from 'supertest'
import { v4 as uuidv4 } from 'uuid'
import init from '~server/init'
import app from '~server/app'
import { Workflow, Node } from '~server/database'

const TEST_WORKFLOW_NAME = uuidv4()

describe('Create Workflow', () => {
  let request: supertest.SuperTest<supertest.Test>

  beforeAll(async () => {
    await init()

    request = supertest(app)
  })

  it('should create a workflow with name', async () => {
    const res = await request.put('/api/workflow').send({
      name: TEST_WORKFLOW_NAME
    })
    expect(res.status).toBe(200)
    expect(res.body.data).toHaveProperty('workflowId')
    expect(res.body.data).toHaveProperty('name')
    expect(res.body.data).toHaveProperty('createdAt')
    expect(res.body.data).toHaveProperty('updatedAt')
    const workflow = await Workflow.findOne({
      where: {
        name: TEST_WORKFLOW_NAME
      }
    })
    expect(workflow).not.toBeNull()
  })

  afterEach(async () => {
    await Workflow.destroy({
      where: {
        name: TEST_WORKFLOW_NAME
      }
    })
  })
})

describe('get workflow', () => {
  let request: supertest.SuperTest<supertest.Test>
  let node: Node
  let workflow: Workflow

  beforeAll(async () => {
    await init()
    request = supertest(app)
    
    workflow = await Workflow.create({
      name: `${TEST_WORKFLOW_NAME}_get`
    })
    node = await Node.create({
      nodeName: 'test',
      nodeType: 'api',
      workflowId: workflow.workflowId,
    })
    console.log(workflow.dataValues, node.dataValues)
  })

  it('should get a workflow by id', async () => {
    const res = await request.get(`/api/workflow/${workflow.workflowId}`)
    expect(res.status).toBe(200)
    const result = JSON.parse(JSON.stringify(res.body.data))
    console.log(result)
    expect(result).toHaveProperty('workflowId')
    expect(result).toHaveProperty('name')
    expect(result).toHaveProperty('nodes')
    expect(result.nodes).toBeInstanceOf(Array)
    expect(result.nodes).toContainEqual(
      expect.objectContaining({ nodeId: node.nodeId })
    )
  })

  it('should get a workflow', async () => {
    const res = await request.get('/api/workflow')
    expect(res.status).toBe(200)
   
    expect(res.body.data).toBeInstanceOf(Array)
    expect(res.body.data).toContainEqual(
      expect.objectContaining({ workflowId: workflow.workflowId })
    )
  })

  afterAll(async () => {
    await node.destroy()
    await workflow.destroy()
  })
})