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

    it('should throw error without parent node', async () => {
      await request.put('/api/node').send({
        name: 'test',
        type: 'api',
        workflowId,
        nodeConfig: {},
      })


      const res = await request.put('/api/node').send({
        name: 'test',
        type: 'api',
        workflowId,
        nodeConfig: {},
        parentNodeId: 1
      })

      expect(res.status).toBe(500)

      const resNext = await request.put('/api/node').send({
        name: 'test',
        type: 'api',
        workflowId,
        nodeConfig: {},
      })
      expect(resNext.status).toBe(500)
    })

    it('should throw error with parent node has next node', async () => {
      const resParent = await request.put('/api/node').send({
        name: 'test',
        type: 'api',
        workflowId,
        nodeConfig: {}
      })

      const nodeId = resParent.body.data.nodeId

      await request.put('/api/node').send({
        name: 'test',
        type: 'api',
        workflowId,
        nodeConfig: {},
        parentNodeId: nodeId
      })

      const res = await request.put('/api/node').send({
        name: 'test',
        type: 'api',
        workflowId,
        nodeConfig: {},
        parentNodeId: nodeId
      })

      expect(res.status).toBe(500)
    })

    it('should throw error with no workflow', async () => {
      const res = await request.put('/api/node').send({
        name: 'test',
        type: 'api',
        workflowId: 10000,
        nodeConfig: {}
      })

      expect(res.status).toBe(500)
    })
  })
})
