import 'module-alias/register'
import path from 'path'
import Express from 'express'
import bodyParser from 'body-parser'
import { createExpressServer } from 'routing-controllers'
import webhookExpress from './utils/webhook-load'
import "reflect-metadata"

const expressApp = Express()

// parse application/x-www-form-urlencoded
expressApp.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
expressApp.use(bodyParser.json())

expressApp.use(
  createExpressServer({
    routePrefix: '/api',
    controllers: [path.join(__dirname, 'src/**/*.controller.ts'), path.join(__dirname, 'src/**/*.controller.js')]
  })
)

expressApp.use('/webhook', webhookExpress)

export default expressApp
