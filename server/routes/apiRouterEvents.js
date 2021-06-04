const apiRouterEvents = require('express').Router();

const { setAllEvents } = require('../controllers/eventsController')


apiRouterEvents.route('/')
  .get(setAllEvents)



module.exports = apiRouterEvents
