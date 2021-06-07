const { addOneHistoryAxios, setAllHistoryAxios,  } = require('../controllers/historyController');

const apiRouterHistory = require('express').Router();


apiRouterHistory.route('/:id')
  .get(setAllHistoryAxios)
  .post(addOneHistoryAxios)



module.exports = apiRouterHistory
