import Express from 'express'
import webhookExpress from './utils/webhook-load'
import init from './init'

void init()

const expressApp = Express()

expressApp.get('/hello', (req, res) => {
  console.log(req)
  res.send('Hello World!')
})

expressApp.use('/webhook',webhookExpress)

export default expressApp
