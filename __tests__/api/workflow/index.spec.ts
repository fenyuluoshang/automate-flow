import supertest from 'supertest'
import { v4 as uuidv4 } from 'uuid'
import init from '~server/init'
import app from '~server/app'
import { Workflow } from '~server/database'

const TEST_WORKFLOW_NAME = uuidv4()

describe('Workflow API', () => {
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

  it('should get a workflow', async () => {
    const res = await request.get('/api/workflow')
    expect(res.status).toBe(200)
    expect(res.body.data).toBeInstanceOf(Array)
  })

  afterEach(async () => {
    await Workflow.destroy({
      where: {
        name: TEST_WORKFLOW_NAME
      }
    })
  })
})
