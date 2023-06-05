/* eslint-disable import/first */
process.env.DB_TYPE = 'sqlite'
process.env.DB_HOST = ':memory:'
import { Workflow, initDB } from '../../server/database'
import createWorkflow from '../../server/src/workflow/createWorkflow'

const TEST_WORKFLOW_NAME = 'test'

describe('createWorkflow', () => {
  beforeEach(async () => {
    await initDB()
  })

  it('should create a workflow with name', async () => {
    await createWorkflow(TEST_WORKFLOW_NAME)
    const workflow = await Workflow.findOne({
      where: {
        name: TEST_WORKFLOW_NAME
      }
    })

    expect(workflow).not.toBeNull()
  })
})
