import Express from 'express'
import bodyParser from 'body-parser'
import webhookExpress from './utils/webhook-load'
import { body, validationResult } from 'express-validator'
import init from './init'
import createWorkflow from './src/createWorkflow'

void init()

const expressApp = Express()

// parse application/x-www-form-urlencoded
expressApp.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
expressApp.use(bodyParser.json())

expressApp.get('/hello', (req, res) => {
  console.log(req)
  res.send('Hello World!')
})

expressApp.put('/workflow', body('name').notEmpty(), async (req, res) => {
  const result = validationResult(req)
  if (result.isEmpty()) {
    const workflow = await createWorkflow(req.body.name, req.body.description)

    res.json({
      code: 0,
      data: workflow
    })
  } else {
    res.status(400).json({
      code: -1,
      errors: result.array()
    })
  }
})

expressApp.use('/webhook', webhookExpress)

export default expressApp
