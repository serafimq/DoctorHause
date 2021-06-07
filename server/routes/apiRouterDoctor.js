const apiRouterDoctor = require('express').Router();
const { addDoctors, setDoctor, setAllDoctors } = require('../controllers/doctorController')


apiRouterDoctor.route('/')
  .get(setAllDoctors)

apiRouterDoctor.route('/:id')
  .post(addDoctors)
  .get(setDoctor)




module.exports = apiRouterDoctor
