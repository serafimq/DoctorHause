const { setEventForMapAxios } = require('../controllers/mapController');

const apiRouterMap = require('express').Router();


apiRouterMap.route('/:id')
  .get(setEventForMapAxios)




module.exports = apiRouterMap
