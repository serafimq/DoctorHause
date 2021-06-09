const { setEventForMapAxios, getCountEventForMapAxios } = require('../controllers/mapController');

const apiRouterMap = require('express').Router();


apiRouterMap.route('/:id')
  .get(setEventForMapAxios)
  .post(getCountEventForMapAxios)




module.exports = apiRouterMap
