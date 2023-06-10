import express from 'express'
import Trigger from '~server/database/model/Trigger'

const webhookExpress = express()

webhookExpress.use('/:id', async (req, res) => {
  if (req.params.id != null) {
    const trigger = await Trigger.findOne({
      where: {
        triggerUUID: req.params.id
      }
    })
    if (trigger != null) {
      res.send(trigger)
    } else {
      res.send('No such trigger')
    }
  }
})

export default webhookExpress
