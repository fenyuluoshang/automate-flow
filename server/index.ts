import path from 'path'
import Express from 'express'
import bodyParser from 'body-parser'
import { createExpressServer } from 'routing-controllers'
import webhookExpress from './utils/webhook-load'
import init from './init'

void init()

const expressApp = Express()

// parse application/x-www-form-urlencoded
expressApp.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
expressApp.use(bodyParser.json())

// expressApp.put('/workflow', body('name').notEmpty(), async (req, res) => {
//   const result = validationResult(req)
//   if (result.isEmpty()) {
//     const workflow = await createWorkflow(req.body.name, req.body.description)

//     res.json({
//       code: 0,
//       data: workflow
//     })
//   } else {
//     res.status(400).json({
//       code: -1,
//       errors: result.array()
//     })
//   }
// })

expressApp.use(
  '/api',
  createExpressServer({
    controllers: [path.join(__dirname, 'src/**/*.controller.ts')]
  })
)

expressApp.use('/webhook', webhookExpress)

export default expressApp
