const apiRouterEvents = require('express').Router();

const { setAllEvents, addEvent, findOneEvent, deleteOneEvent } = require('../controllers/eventsController')


apiRouterEvents.route('/:id')
  .get(setAllEvents)
  .post(addEvent)
  .delete(deleteOneEvent)

apiRouterEvents.route('/:id/oneEvent')
  .post(findOneEvent)



module.exports = apiRouterEvents
