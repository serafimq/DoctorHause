const apiRouterEvents = require('express').Router();
const { setAllEvents, addEvent, findOneEvent, addImageFile, deleteOneEvent } = require('../controllers/eventsController')

apiRouterEvents.route('/:id')
  .get(setAllEvents)
  .post(addEvent)
  .delete(deleteOneEvent)

apiRouterEvents.route('/:id/oneEvent')
  .post(findOneEvent)

apiRouterEvents.route('/file')
  .post(addImageFile)

module.exports = apiRouterEvents
