import supertest from 'supertest'
import init from '../../../server/init'
import app from '../../../server/app'
import { Workflow } from '../../../server/database'

describe('Workflow API', () => {

  let request: supertest.SuperTest<supertest.Test>

  beforeAll(async ()=>{
    await init()

    request = supertest(app)
  })

  it('should create a workflow with name', async () => {
    const res = await request.put('/api/workflow').send({
      name: 'test'
    })
    expect(res.status).toBe(200)
    expect(res.body.data).toHaveProperty('id')
    expect(res.body.data).toHaveProperty('name')
    expect(res.body.data).toHaveProperty('createdAt')
    expect(res.body.data).toHaveProperty('updatedAt')
    const workflow = await Workflow.findOne({
      where: {
        name: 'test'
      }
    })
    expect(workflow).not.toBeNull()
  })
})
