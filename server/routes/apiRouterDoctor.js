const apiRouterDoctor = require('express').Router();
const {addDoctors, setDoctor, setAllDoctors} = require ('../controllers/doctorController')


apiRouterDoctor.route('/homepage/:id')
  .post(addDoctors)
  apiRouterDoctor.route('/homepage/:id')
  .get(setDoctor)
  apiRouterDoctor.route('/')
  .get(setAllDoctors)
  


module.exports = apiRouterDoctor
