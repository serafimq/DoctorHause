const apiRouterEvents = require('express').Router();

const { setAllEvents, addEvent, findOneEvent } = require('../controllers/eventsController')


apiRouterEvents.route('/:id')
  .get(setAllEvents)
  .post(addEvent)

apiRouterEvents.route('/:id/oneEvent')
  .post(findOneEvent)



module.exports = apiRouterEvents
