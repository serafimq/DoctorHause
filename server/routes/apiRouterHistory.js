const { addOneHistoryAxios, setAllHistoryAxios, sortPriceHistoryAxios, filterProblemHistoryAxios } = require('../controllers/historyController');

const apiRouterHistory = require('express').Router();


apiRouterHistory.route('/:id')
  .get(setAllHistoryAxios)
  .post(addOneHistoryAxios)
  .patch(sortPriceHistoryAxios)
  .put(filterProblemHistoryAxios)


module.exports = apiRouterHistory
