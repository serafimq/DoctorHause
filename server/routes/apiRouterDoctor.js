const apiRouterDoctor = require('express').Router();
const { addDoctors, setDoctor, setAllDoctors, addFeedBack, fileDoctors, addFeedBackPATCH, } = require('../controllers/doctorController')


apiRouterDoctor.route('/')
  .get(setAllDoctors)

apiRouterDoctor.route('/file')
  .post(fileDoctors)

apiRouterDoctor.route('/:id')
  .post(addDoctors)
  .get(setDoctor)
  .put(addFeedBack)
  .patch(addFeedBackPATCH)


module.exports = apiRouterDoctor
