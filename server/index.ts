import Express from 'express'
import webhookExpress from './utils/webhook-load'

const expressApp = Express()

expressApp.get('/hello', (req, res) => {
  console.log(req)
  res.send('Hello World!')
})

expressApp.use('/webhook',webhookExpress)

export default expressApp
