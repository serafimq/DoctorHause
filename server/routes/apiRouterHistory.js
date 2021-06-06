const { addOneHistoryAxios } = require('../controllers/historyController');

const apiRouterHistory = require('express').Router();


apiRouterHistory.route('/:id')
  // .get(setAllEvents)
  .post(addOneHistoryAxios)



module.exports = apiRouterHistory
