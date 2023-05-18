import Express from 'express'

const expressApp = Express()

expressApp.get('/hello', (req, res) => {
  console.log(req)
  res.send('Hello World!')
})

export default expressApp
