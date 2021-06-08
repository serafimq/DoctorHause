const apiRouterDoctor = require('express').Router();
const { addDoctors, setDoctor, setAllDoctors, addFeedBack } = require('../controllers/doctorController')


apiRouterDoctor.route('/')
  .get(setAllDoctors)

apiRouterDoctor.route('/:id')
  .post(addDoctors)
  .get(setDoctor)
  .put(addFeedBack)




module.exports = apiRouterDoctor
