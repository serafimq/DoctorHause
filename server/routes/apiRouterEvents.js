const apiRouterEvents = require('express').Router();

const { setAllEvents, addEvent } = require('../controllers/eventsController')


apiRouterEvents.route('/')
  .get(setAllEvents)
  .post(addEvent)



module.exports = apiRouterEvents
