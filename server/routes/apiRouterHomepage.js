const apiRouterHomepage = require('express').Router();

const { changeAccess } = require('../controllers/doctorController');
const { setAvatars } = require('../controllers/homepageController');


apiRouterHomepage.route('/:id')
  .get(setAvatars)
  .patch(changeAccess)

apiRouterHomepage.route('/oneEvent')
  .post()

module.exports = apiRouterHomepage
