/* eslint-disable import/first */
process.env.DB_TYPE = 'sqlite'
process.env.DB_HOST = ':memory:'

import { describe, it, afterEach, expect } from '@jest/globals'
import { Workflow } from '../../server/database'
import createWorkflow from '../../server/src/createWorkflow'

const TEST_WORKFLOW_NAME = 'test'

describe('createWorkflow', () => {
  afterEach(async () => {
    await Workflow.destroy({
      where: {
        name: TEST_WORKFLOW_NAME
      }
    })
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