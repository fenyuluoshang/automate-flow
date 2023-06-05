import supertest from "supertest"
import init from '../../../server/init'
import app from '../../../server/app'

const TEST_WORKFLOW_NAME = 'test'

describe('Node API', () => {

  let request: supertest.SuperTest<supertest.Test>

  beforeAll(async ()=>{
    await init()

    request = supertest(app)
  })

  describe('create', () => {

    let workflowId: number

    beforeEach(async () => {
      const res = await request.put('/api/workflow').send({
        name: TEST_WORKFLOW_NAME
      })
      workflowId = res.body.data.id
    })

    it('should create a node', async () => {
      const res = await request.put('/api/node').send({
        name: 'test',
        type: 'api',
        workflowId,
        nodeConfig: {}
      })
      expect(res.status).toBe(200)
      expect(res.body.data).toHaveProperty('nodeId')
      expect(res.body.data).toHaveProperty('nodeName')
      expect(res.body.data).toHaveProperty('nodeType')
      expect(res.body.data).toHaveProperty('workflowId')
      expect(res.body.data).toHaveProperty('createdAt')
      expect(res.body.data).toHaveProperty('updatedAt')
    })

    it('should create a node with parent node', async () => {
      const resParent = await request.put('/api/node').send({
        name: 'test',
        type: 'api',
        workflowId,
        nodeConfig: {}
      })

      const nodeId = resParent.body.data.nodeId

      const res = await request.put('/api/node').send({
        name: 'test',
        type: 'api',
        workflowId,
        nodeConfig: {},
        parentNodeId: nodeId
      })

      expect(res.status).toBe(200)
      expect(res.body.data).toHaveProperty('nodeId')
      expect(res.body.data).toHaveProperty('nodeName')
      expect(res.body.data).toHaveProperty('nodeType')
      expect(res.body.data).toHaveProperty('workflowId')
      expect(res.body.data).toHaveProperty('parentNodeId')
      expect(res.body.data).toHaveProperty('createdAt')
      expect(res.body.data).toHaveProperty('updatedAt')
    })
  })
})
