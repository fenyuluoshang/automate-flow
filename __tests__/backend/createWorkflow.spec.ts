/* eslint-disable import/first */
process.env.DB_TYPE = 'sqlite'
process.env.DB_HOST = ':memory:'
import { v4 as uuidv4  } from 'uuid'
import { Workflow, initDB } from '../../server/database'
import createWorkflow from '../../server/src/workflow/createWorkflow'

const TEST_WORKFLOW_NAME = uuidv4()

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

  afterEach(async () => {
    await Workflow.destroy({
      where: {
        name: TEST_WORKFLOW_NAME
      }
    })
  })
})
