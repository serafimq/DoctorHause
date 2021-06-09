const apiRouterEvents = require('express').Router();
const { setAllEvents, addEvent, findOneEvent, addImageFile } = require('../controllers/eventsController')

apiRouterEvents.route('/:id')
  .get(setAllEvents)
  .post(addEvent)

apiRouterEvents.route('/:id/oneEvent')
  .post(findOneEvent)

apiRouterEvents.route('/file')
  .post(addImageFile)

module.exports = apiRouterEvents
